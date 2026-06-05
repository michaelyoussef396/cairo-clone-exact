/**
 * Verbatim content + image migration for Cairo By Nights.
 *
 * Run from the studio/ folder:
 *   npx sanity exec migration/seed.ts --with-user-token
 *
 * Idempotent: documents use deterministic _ids (createOrReplace) and uploaded
 * images are cached in migration/.asset-map.json so re-runs don't duplicate.
 */
import { getCliClient } from 'sanity/cli'
import { readFileSync, existsSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { buildMenu } from './lib/menu'
import { singletonDocs, banquetPackages } from './content'

const client = getCliClient({ apiVersion: '2024-01-01' })
const REPO_ROOT = resolve(process.cwd(), '..')
const ASSETS_DIR = resolve(REPO_ROOT, 'src/assets')
const ASSET_MAP_PATH = resolve(process.cwd(), 'migration/.asset-map.json')

const assetMap: Record<string, string> = existsSync(ASSET_MAP_PATH)
  ? JSON.parse(readFileSync(ASSET_MAP_PATH, 'utf8'))
  : {}

function saveAssetMap() {
  writeFileSync(ASSET_MAP_PATH, JSON.stringify(assetMap, null, 2))
}

function imageRef(assetId: string) {
  return { _type: 'image', asset: { _type: 'reference', _ref: assetId } }
}

async function uploadRemote(url: string): Promise<string | null> {
  if (assetMap[url]) return assetMap[url]
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    const filename = url.split('/').pop() || 'image'
    const asset = await client.assets.upload('image', buf, { filename })
    assetMap[url] = asset._id
    saveAssetMap()
    return asset._id
  } catch (err) {
    console.warn(`  ! failed to upload ${url}: ${(err as Error).message}`)
    return null
  }
}

async function uploadLocal(name: string): Promise<string | null> {
  const cacheKey = `local:${name}`
  if (assetMap[cacheKey]) return assetMap[cacheKey]
  const path = resolve(ASSETS_DIR, name)
  if (!existsSync(path)) {
    console.warn(`  ! local asset not found: ${name}`)
    return null
  }
  const asset = await client.assets.upload('image', readFileSync(path), { filename: name })
  assetMap[cacheKey] = asset._id
  saveAssetMap()
  return asset._id
}

// Recursively replace { _img: 'name' } placeholders with image references.
async function resolveImages(value: any): Promise<any> {
  if (Array.isArray(value)) {
    const out = []
    for (const v of value) out.push(await resolveImages(v))
    return out
  }
  if (value && typeof value === 'object') {
    if (typeof value._img === 'string') {
      const id = await uploadLocal(value._img)
      return id ? imageRef(id) : undefined
    }
    const out: Record<string, any> = {}
    for (const [k, v] of Object.entries(value)) out[k] = await resolveImages(v)
    return out
  }
  return value
}

const categoryId = (key: string) => `menuCategory-${key.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
const safeId = (s: string) => s.replace(/[^a-zA-Z0-9._-]/g, '-')

async function run() {
  console.log('Building menu from CSV…')
  const menu = buildMenu(REPO_ROOT)
  console.log(`  ${menu.categories.length} categories, ${menu.items.length} items, ${menu.imageUrls.length} unique images`)

  console.log('Uploading menu images…')
  const urlToAsset: Record<string, string> = {}
  for (const url of menu.imageUrls) {
    const id = await uploadRemote(url)
    if (id) urlToAsset[url] = id
  }
  console.log(`  ${Object.keys(urlToAsset).length}/${menu.imageUrls.length} images available`)

  const docs: any[] = []

  // Categories
  for (const cat of menu.categories) {
    docs.push({
      _id: categoryId(cat.key),
      _type: 'menuCategory',
      key: cat.key,
      displayTitle: cat.displayTitle,
      order: cat.order,
      available: true,
    })
  }

  // Items
  for (const item of menu.items) {
    const doc: any = {
      _id: `menuItem-${safeId(item.slug)}`,
      _type: 'menuItem',
      name: item.name,
      slug: { _type: 'slug', current: item.slug },
      isSubHeading: item.isSubHeading,
      category: { _type: 'reference', _ref: categoryId(item.categoryKey) },
      order: item.order,
    }
    if (!item.isSubHeading) {
      doc.description = item.description
      doc.prices = item.prices
      if (item.priceText) doc.priceText = item.priceText
      doc.available = true
      doc.imageAlt = item.imageAlt
      const assetId = item.image ? urlToAsset[item.image] : undefined
      if (assetId) doc.image = imageRef(assetId)
    }
    docs.push(doc)
  }

  // Banquets
  docs.push(...banquetPackages)

  // Singletons + pages (resolve local image placeholders)
  for (const page of singletonDocs) {
    docs.push(await resolveImages(page))
  }

  console.log(`Writing ${docs.length} documents…`)
  let i = 0
  for (const doc of docs) {
    await client.createOrReplace(doc)
    if (++i % 25 === 0) console.log(`  ${i}/${docs.length}`)
  }

  console.log(`Done. Wrote ${docs.length} documents.`)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
