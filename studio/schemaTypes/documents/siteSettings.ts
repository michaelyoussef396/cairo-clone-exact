import { defineType, defineField, defineArrayMember } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'contact', title: 'Contact & hours' },
    { name: 'nav', title: 'Navigation & footer' },
  ],
  fields: [
    defineField({ name: 'restaurantName', type: 'string', group: 'general' }),
    defineField({ name: 'tagline', type: 'string', group: 'general' }),
    defineField({ name: 'logo', type: 'image', group: 'general', options: { hotspot: true } }),
    defineField({ name: 'logoAlt', type: 'string', title: 'Logo alt text', group: 'general' }),
    defineField({ name: 'copyright', type: 'string', group: 'general' }),

    defineField({ name: 'address', type: 'string', title: 'Address (display)', group: 'contact' }),
    defineField({ name: 'streetAddress', type: 'string', group: 'contact' }),
    defineField({ name: 'locality', type: 'string', title: 'Suburb / locality', group: 'contact' }),
    defineField({ name: 'region', type: 'string', title: 'State / region', group: 'contact' }),
    defineField({ name: 'postalCode', type: 'string', group: 'contact' }),
    defineField({ name: 'country', type: 'string', group: 'contact' }),
    defineField({ name: 'phone', type: 'string', title: 'Phone (display)', group: 'contact' }),
    defineField({ name: 'phoneE164', type: 'string', title: 'Phone (E.164)', description: 'e.g. +61396541005', group: 'contact' }),
    defineField({ name: 'email', type: 'string', group: 'contact', validation: (r) => r.email() }),
    defineField({ name: 'openingHours', type: 'openingHours', group: 'contact' }),
    defineField({ name: 'reservationUrl', type: 'url', title: 'Reservation / booking URL', group: 'contact' }),
    defineField({ name: 'googleMapsUrl', type: 'url', title: 'Google Maps URL', group: 'contact' }),
    defineField({ name: 'mapEmbedUrl', type: 'url', title: 'Map embed (iframe src)', group: 'contact' }),

    defineField({
      name: 'socialLinks',
      type: 'object',
      group: 'general',
      fields: [
        defineField({ name: 'facebook', type: 'url' }),
        defineField({ name: 'instagram', type: 'url' }),
      ],
    }),

    defineField({
      name: 'navItems',
      type: 'array',
      title: 'Header navigation',
      group: 'nav',
      of: [defineArrayMember({ type: 'navLink' })],
    }),
    defineField({
      name: 'quickLinks',
      type: 'array',
      title: 'Footer quick links',
      group: 'nav',
      of: [defineArrayMember({ type: 'navLink' })],
    }),
    defineField({ name: 'footerDescription', type: 'text', rows: 3, title: 'Footer description', group: 'nav' }),
  ],
  preview: {
    prepare() {
      return { title: 'Site settings' }
    },
  },
})
