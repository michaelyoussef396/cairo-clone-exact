import type { PortableTextBlock } from '@portabletext/react'

export type SanityImage = {
  url: string | null
  alt?: string
}

// ---- Menu ----
export type PriceTier = { label?: string; amount: string }

export type MenuItem = {
  slug: string
  name: string
  isSubHeading: boolean
  description?: string
  prices: PriceTier[]
  priceText?: string
  image?: string | null
  imageAlt?: string
}

export type MenuCategory = {
  key: string
  displayTitle: string
  order: number
  items: MenuItem[]
}

export type BanquetLine = { label?: string; value?: string }
export type BanquetPackage = {
  price: string
  perPerson?: string
  items: BanquetLine[]
}

// ---- Shared blocks ----
export type LinkButton = { label: string; href: string; style?: 'hero' | 'reserve' }
export type NavLink = { name: string; href: string }
export type StatItem = { value: string; label: string }
export type InfoCard = {
  emoji?: string
  title: string
  body?: string
  richBody?: PortableTextBlock[]
  href?: string
  buttonLabel?: string
}
export type ReviewCard = {
  author: string
  title?: string
  body: string
  source?: string
  rating?: string
}
export type FaqItem = { question: string; answer: string }
export type ScheduleDay = { day: string; title?: string; description?: string; times?: string }
export type ShishaFlavor = { emoji?: string; name: string; description: string }
export type Seo = {
  title?: string
  description?: string
  canonical?: string
  ogType?: string
  noindex?: boolean
}

// ---- Site settings ----
export type SiteSettings = {
  restaurantName?: string
  tagline?: string
  logo?: { url: string | null }
  logoAlt?: string
  copyright?: string
  footerDescription?: string
  address?: string
  streetAddress?: string
  locality?: string
  region?: string
  postalCode?: string
  country?: string
  phone?: string
  phoneE164?: string
  email?: string
  openingHours?: {
    weekdays?: string
    weekends?: string
    structured?: { days: string[]; opens: string; closes: string }[]
  }
  reservationUrl?: string
  googleMapsUrl?: string
  mapEmbedUrl?: string
  socialLinks?: { facebook?: string; instagram?: string }
  navItems?: NavLink[]
  quickLinks?: NavLink[]
}

// Page documents are loosely typed; consumers destructure the sections they use.
export type PageDocument = Record<string, any> & { seo?: Seo }
