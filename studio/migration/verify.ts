/**
 * Verbatim verification: diffs migrated Sanity content against the codebase
 * (the source of truth). Run from studio/:
 *   npx esbuild migration/verify.ts --bundle --platform=node --format=cjs --packages=external --outfile=migration/verify.cjs
 *   npx sanity exec migration/verify.cjs --with-user-token
 *
 * Two checks:
 *  A. MENU round-trip — reassemble each item's name + separated prices into the
 *     original CSV Title and assert exact equality; exact description/priceText.
 *  B. COPY membership — every copy leaf (incl. each Portable Text paragraph)
 *     must appear verbatim (case-sensitive) somewhere in the source files.
 */
import { getCliClient } from 'sanity/cli'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { buildMenu } from './lib/menu'

const client = getCliClient({ apiVersion: '2024-01-01' })
const REPO = resolve(process.cwd(), '..')

const SOURCE_FILES = [
  'src/pages/Index.tsx',
  'src/pages/AboutUs.tsx',
  'src/pages/Events.tsx',
  'src/pages/Location.tsx',
  'src/pages/FunctionRoom.tsx',
  'src/pages/ContactUs.tsx',
  'src/pages/NotFound.tsx',
  'src/pages/NewMenu.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/components/HeroSection.tsx',
  'src/components/StatsSection.tsx',
  'src/components/MenuPreview.tsx',
  'src/components/TestimonialSection.tsx',
  'src/components/FAQSection.tsx',
  'studio/migration/lib/menu.ts',
  'studio/migration/menu.csv',
]

const stripWs = (s: string) => s.replace(/<br\s*\/?>(?=)/gi, '').replace(/\s+/g, '')
// Remove JSX whitespace expressions like {" "} / {' '} that interleave inline text.
const cleanJsx = (s: string) => s.replace(/\{\s*["'`]\s*["'`]\s*\}/g, ' ')
const rawSource = cleanJsx(SOURCE_FILES.map((f) => readFileSync(resolve(REPO, f), 'utf8')).join('\n'))
const RAW = stripWs(rawSource)
const STRIPPED = stripWs(rawSource.replace(/<[^>]+>/g, ' '))

// Values we don't verify as "copy": URLs/paths/technical tokens.
const SKIP_KEYS = new Set([
  '_key', '_type', '_id', '_rev', '_createdAt', '_updatedAt', 'style', 'ogType',
  'noindex', 'order', 'available', 'isSubHeading', 'opens', 'closes',
])
const isTechnical = (s: string) => /^(https?:|tel:|mailto:|\/|#|m1t8egcx|production)/.test(s.trim())

// Known computed/derived values that are intentionally not literal in source.
const WHITELIST = [
  // Computed in ContactUs.tsx from the address (not a literal in source).
  'https://maps.google.com/search/5%2F252%20Lygon%20Street%2C%20Carlton%203053',
  // CSV cell uses backslash-escaped quotes (\"sun rise\"). The migration runs the
  // same parser as the app's csvParser.ts (both strip "), so Sanity stores exactly
  // what the live site renders today; the raw .csv still shows the \"...\" form.
  'A refreshing mix of Vodka or Tequila and orange juice, stylishly finished with a dash of Grenadine for a summer \\sun rise\\.',
]

type Leaf = { path: string; value: string }

function collectLeaves(node: any, path: string, out: Leaf[]) {
  if (node == null) return
  if (typeof node === 'string') {
    out.push({ path, value: node })
    return
  }
  if (Array.isArray(node)) {
    // Portable Text block array? flatten each block to its paragraph text.
    if (node.length && node[0] && node[0]._type === 'block') {
      node.forEach((block: any, i: number) => {
        const text = (block.children || []).map((c: any) => c.text || '').join('')
        if (text.trim()) out.push({ path: `${path}[${i}]`, value: text })
      })
      return
    }
    node.forEach((item, i) => collectLeaves(item, `${path}[${i}]`, out))
    return
  }
  if (typeof node === 'object') {
    if (node._type === 'image' || node.asset || node._ref) return // image / reference refs
    for (const [k, v] of Object.entries(node)) {
      if (SKIP_KEYS.has(k)) continue
      collectLeaves(v, path ? `${path}.${k}` : k, out)
    }
  }
}

function found(value: string): boolean {
  const n = stripWs(value.replace(/\n/g, ' '))
  if (!n) return true
  if (WHITELIST.includes(value.trim())) return true
  return RAW.includes(n) || STRIPPED.includes(n)
}

async function run() {
  let failures = 0

  // ---- A. MENU round-trip ----
  console.log('\n=== A. MENU round-trip vs CSV ===')
  const menu = buildMenu(REPO)
  const csvBySlug: Record<string, any> = {}
  // Re-read raw CSV rows for original titles/descriptions.
  const csvLines = readFileSync(resolve(REPO, 'studio/migration/menu.csv'), 'utf8').split('\n').slice(1)
  for (const line of csvLines) {
    if (!line.trim()) continue
    const v: string[] = []
    let cur = '', q = false
    for (const ch of line) {
      if (ch === '"') q = !q
      else if (ch === ',' && !q) { v.push(cur.trim()); cur = '' }
      else cur += ch
    }
    v.push(cur.trim())
    const unq = (s: string) => (s || '').replace(/"/g, '')
    csvBySlug[unq(v[0])] = { title: unq(v[1]), desc: unq(v[5]) }
  }

  const items = await client.fetch(
    `*[_type=="menuItem"]{ "slug": slug.current, name, description, prices, priceText, isSubHeading }`,
  )
  const itemBySlug: Record<string, any> = {}
  for (const it of items) itemBySlug[it.slug] = it

  let menuChecked = 0
  for (const built of menu.items) {
    const doc = itemBySlug[built.slug]
    const csv = csvBySlug[built.slug]
    if (!doc) { console.log(`  MISSING in Sanity: ${built.slug}`); failures++; continue }
    if (built.isSubHeading) {
      if (doc.name !== csv.title) { console.log(`  SUBHEAD name mismatch ${built.slug}: "${doc.name}" vs "${csv.title}"`); failures++ }
      continue
    }
    menuChecked++
    // Reassemble the original Title from Sanity name + separated prices.
    let reassembled: string
    const tiers = (doc.prices || []).map((p: any) => (p.label ? `${p.label} ${p.amount}` : p.amount))
    if (doc.priceText) {
      // Column-priced (wine/beer) — title is just the name.
      reassembled = doc.name
    } else if (doc.prices && doc.prices.length > 1) {
      // Multi-size — "Name — L $a / L $a ..."
      reassembled = `${doc.name} — ${tiers.join(' / ')}`
    } else if (doc.prices && doc.prices.length === 1 && csv.title.startsWith('$')) {
      reassembled = `${doc.prices[0].amount} ${doc.name}`
    } else {
      reassembled = doc.name // price came from desc column ($5 tea / long black)
    }
    if (reassembled.trim() !== csv.title.trim()) {
      console.log(`  TITLE mismatch ${built.slug}:\n      got "${reassembled}"\n      csv "${csv.title}"`)
      failures++
    }
    // Description: for normal items must equal CSV short description; for column/price-only it is blank.
    const descColumn = /^(Glass|Bottle)\b/.test(csv.desc) || /^\$\d+$/.test(csv.desc) || csv.desc === 'SUBHEADING'
    const expectedDesc = descColumn ? '' : csv.desc
    if ((doc.description || '') !== expectedDesc) {
      console.log(`  DESC mismatch ${built.slug}:\n      got "${doc.description}"\n      exp "${expectedDesc}"`)
      failures++
    }
    if (descColumn && /^(Glass|Bottle)\b/.test(csv.desc) && doc.priceText !== csv.desc) {
      console.log(`  PRICETEXT mismatch ${built.slug}: "${doc.priceText}" vs "${csv.desc}"`)
      failures++
    }
  }
  console.log(`  Round-trip checked ${menuChecked} priced items + sub-headings.`)

  // ---- B. COPY membership ----
  console.log('\n=== B. COPY membership vs source ===')
  const docs = await client.fetch(
    `*[_type in ["menuItem","menuCategory","banquetPackage","siteSettings","homePage","menuPage","aboutPage","eventsPage","locationPage","functionRoomPage","contactPage","notFoundPage"]]`,
  )
  const leaves: Leaf[] = []
  for (const doc of docs) collectLeaves(doc, doc._id, leaves)

  const checked: Leaf[] = []
  const misses: Leaf[] = []
  for (const leaf of leaves) {
    const v = leaf.value
    if (!v || !v.trim()) continue
    if (isTechnical(v)) continue
    checked.push(leaf)
    if (!found(v)) misses.push(leaf)
  }
  console.log(`  Checked ${checked.length} copy leaves across ${docs.length} documents.`)
  if (misses.length) {
    console.log(`  ${misses.length} MISSES (not found verbatim in source):`)
    for (const m of misses.slice(0, 80)) {
      console.log(`    [${m.path}] ${JSON.stringify(m.value.slice(0, 160))}`)
    }
    failures += misses.length
  } else {
    console.log('  All copy leaves found verbatim in source. ✓')
  }

  console.log(`\n=== RESULT: ${failures === 0 ? 'PASS — 0 differences' : `FAIL — ${failures} differences`} ===`)
}

run().catch((e) => { console.error(e); process.exit(1) })
