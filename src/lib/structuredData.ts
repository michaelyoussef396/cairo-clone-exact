import type { SiteSettings } from './sanity.types'

/**
 * Builds the structured-data fragments shared across page JSON-LD from
 * siteSettings, with literal fallbacks equal to the original hardcoded values
 * so the serialized output stays byte-identical until (and after) Sanity loads.
 */
export const postalAddress = (site?: SiteSettings) => ({
  '@type': 'PostalAddress',
  streetAddress: site?.streetAddress || '5/252 Lygon Street',
  addressLocality: site?.locality || 'Carlton',
  addressRegion: site?.region || 'VIC',
  postalCode: site?.postalCode || '3053',
  addressCountry: site?.country || 'AU',
})

export const telephone = (site?: SiteSettings) => site?.phoneE164 || '+61396541005'

export const email = (site?: SiteSettings) => site?.email || 'contactus@cairobynightsrestaurant.com.au'

export const sameAs = (site?: SiteSettings) => [
  site?.socialLinks?.facebook || 'https://www.facebook.com/caironights',
  site?.socialLinks?.instagram || 'https://www.instagram.com/caironights',
]

export const openingHoursSpec = (site?: SiteSettings) => {
  const def = [
    { days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '17:00', closes: '23:30' },
    { days: ['Friday', 'Saturday'], opens: '17:00', closes: '00:30' },
  ]
  const source = site?.openingHours?.structured?.length ? site.openingHours.structured : def
  return source.map((s) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: s.days,
    opens: s.opens,
    closes: s.closes,
  }))
}
