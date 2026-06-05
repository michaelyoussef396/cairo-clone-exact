import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * Builds menu category / item / banquet document content directly from the
 * source CSV (the single source of truth), so the migrated names, prices and
 * descriptions are verbatim. Prices are modelled cleanly into tiers.
 */

export const categoryOrder = [
  'Entree',
  'mains',
  'Grill',
  'Tagen',
  'salads',
  'Dips',
  'kids',
  'Desserts',
  'Mocktails',
  'Specialty Cocktails',
  'Cocktails',
  'Wines',
  'Beers & Ciders',
  'Hot Drinks',
  'Tea',
  'Cold Drinks',
]

export const categoryDisplayNames: Record<string, string> = {
  Entree: 'Entrees',
  mains: 'Main Dishes',
  Grill: 'Grill Selection',
  Tagen: 'Traditional Tagen',
  salads: 'Fresh Salads',
  Dips: 'Dips & Spreads',
  kids: 'Kids Menu',
  Desserts: 'Sweet Endings',
  Mocktails: 'Refreshing Mocktails',
  'Specialty Cocktails': 'Signature Cocktails',
  Cocktails: 'Cocktails',
  Wines: 'Fine Wines',
  'Beers & Ciders': 'Beers & Ciders',
  'Hot Drinks': 'Hot Beverages',
  Tea: 'Teas',
  'Cold Drinks': 'Cool Refreshments',
}

export type PriceTier = { _key: string; label?: string; amount: string }

export type RawRow = {
  slug: string
  title: string
  image: string
  imageAlt: string
  foodCategory: string
  shortDescription: string
}

function parseCsv(csvText: string): RawRow[] {
  const lines = csvText.split('\n')
  return lines
    .slice(1)
    .filter((line) => line.trim())
    .map((line) => {
      const values: string[] = []
      let current = ''
      let inQuotes = false
      for (let i = 0; i < line.length; i++) {
        const char = line[i]
        if (char === '"') inQuotes = !inQuotes
        else if (char === ',' && !inQuotes) {
          values.push(current.trim())
          current = ''
        } else current += char
      }
      values.push(current.trim())
      const unq = (s: string | undefined) => (s ?? '').replace(/"/g, '')
      return {
        slug: unq(values[0]),
        title: unq(values[1]),
        image: unq(values[2]),
        imageAlt: unq(values[3]),
        foodCategory: unq(values[4]),
        shortDescription: unq(values[5]),
      }
    })
    .filter((r) => r.slug && r.title)
}

const stripLeadingPrice = (title: string) => title.replace(/^\$\d+\s*/, '').trim()

let tierKey = 0
const tier = (amount: string, label?: string): PriceTier => {
  const t: PriceTier = { _key: `p${tierKey++}`, amount }
  if (label) t.label = label
  return t
}

export type MenuItemContent = {
  slug: string
  name: string
  isSubHeading: boolean
  description: string
  prices: PriceTier[]
  priceText?: string
  categoryKey: string
  order: number
  image: string
  imageAlt: string
}

export type BuiltMenu = {
  categories: { key: string; displayTitle: string; order: number }[]
  items: MenuItemContent[]
  imageUrls: string[]
}

export function buildMenu(repoRoot: string): BuiltMenu {
  // CSV is the historical migration source, kept under studio/migration (not shipped in the app).
  const csv = readFileSync(resolve(repoRoot, 'studio/migration/menu.csv'), 'utf8')
  const rows = parseCsv(csv)

  const categories = categoryOrder.map((key, order) => ({
    key,
    displayTitle: categoryDisplayNames[key] || key,
    order,
  }))

  const perCategoryIndex: Record<string, number> = {}
  const imageUrls = new Set<string>()

  const items: MenuItemContent[] = rows.map((row) => {
    const cat = row.foodCategory
    const order = (perCategoryIndex[cat] = (perCategoryIndex[cat] ?? -1) + 1)
    const isSubHeading = row.shortDescription === 'SUBHEADING'
    const desc = row.shortDescription
    const title = row.title

    let name = stripLeadingPrice(title)
    let description = ''
    let prices: PriceTier[] = []
    let priceText: string | undefined

    if (isSubHeading) {
      name = title
    } else {
      const isPriceOnlyDesc = /^\$\d+$/.test(desc)
      const isColumnDesc = /^(Glass|Bottle)\b/.test(desc)
      const hasMultiSizeTitle = title.includes('—') && /\$\d+/.test(title)

      if (hasMultiSizeTitle && !isPriceOnlyDesc && !isColumnDesc) {
        const [base, rest] = [title.slice(0, title.indexOf('—')), title.slice(title.indexOf('—') + 1)]
        name = base.trim()
        description = desc
        prices = rest.split('/').map((seg) => {
          const s = seg.trim()
          const amount = (s.match(/\$\d+/) || [''])[0]
          const label = s.replace(/\$\d+/, '').trim()
          return tier(amount, label || undefined)
        })
      } else if (isColumnDesc) {
        name = stripLeadingPrice(title)
        description = ''
        priceText = desc
        prices = desc.split('•').map((seg) => {
          const s = seg.trim()
          const amount = (s.match(/\$\d+/) || [''])[0]
          const label = s.replace(/\$\d+/, '').trim()
          return tier(amount, label || undefined)
        })
      } else if (isPriceOnlyDesc) {
        name = stripLeadingPrice(title)
        description = ''
        prices = [tier(desc)]
      } else {
        name = stripLeadingPrice(title)
        description = desc
        const amount = (title.match(/\$\d+/) || [''])[0]
        if (amount) prices = [tier(amount)]
      }
      if (row.image) imageUrls.add(row.image)
    }

    return {
      slug: row.slug,
      name,
      isSubHeading,
      description,
      prices,
      priceText,
      categoryKey: cat,
      order,
      image: row.image,
      imageAlt: row.imageAlt,
    }
  })

  return { categories, items, imageUrls: [...imageUrls] }
}
