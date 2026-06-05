import { sanityClient } from './sanity'
import type {
  BanquetPackage,
  MenuCategory,
  MenuItem,
  PageDocument,
  SiteSettings,
} from './sanity.types'

const menuQuery = `{
  "categories": *[_type == "menuCategory"] | order(order asc){ key, displayTitle, order },
  "items": *[_type == "menuItem"] | order(order asc){
    "slug": slug.current,
    name,
    isSubHeading,
    description,
    prices[]{ label, amount },
    priceText,
    "image": image.asset->url,
    imageAlt,
    "categoryKey": category->key,
    order
  }
}`

type RawMenu = {
  categories: { key: string; displayTitle: string; order: number }[]
  items: (MenuItem & { categoryKey: string; order: number })[]
}

/**
 * Returns categories in display order, each with its items grouped and ordered —
 * mirroring the grouping/ordering the legacy csvParser produced.
 */
export async function getMenu(): Promise<MenuCategory[]> {
  const data = await sanityClient.fetch<RawMenu>(menuQuery)
  const byKey = new Map<string, MenuItem[]>()
  for (const item of data.items) {
    const list = byKey.get(item.categoryKey) ?? []
    list.push(item)
    byKey.set(item.categoryKey, list)
  }
  return [...data.categories]
    .sort((a, b) => a.order - b.order)
    .map((cat) => ({
      ...cat,
      items: (byKey.get(cat.key) ?? []).sort((a, b) => (a as any).order - (b as any).order),
    }))
}

const banquetQuery = `*[_type == "banquetPackage"] | order(order asc){
  price, perPerson, items[]{ label, value }
}`

export async function getBanquets(): Promise<BanquetPackage[]> {
  return sanityClient.fetch(banquetQuery)
}

const siteSettingsQuery = `*[_id == "siteSettings"][0]{
  ...,
  "logo": { "url": logo.asset->url }
}`

export async function getSiteSettings(): Promise<SiteSettings> {
  return sanityClient.fetch(siteSettingsQuery)
}

/**
 * Fetches a page singleton by its fixed _id, resolving image asset URLs.
 * `_id` matches the document type (e.g. "homePage", "aboutPage").
 */
export async function getPage(id: string): Promise<PageDocument> {
  const query = `*[_id == $id][0]{
    ...,
    hero{ ..., "image": { "url": image.asset->url } },
    "galleryUrls": gallery.images[].asset->url,
    carltonLygon{ ..., "image": { "url": image.asset->url } }
  }`
  return sanityClient.fetch(query, { id })
}
