import { defineType, defineField, defineArrayMember } from 'sanity'
import { WarningOutlineIcon } from '@sanity/icons'

export const notFoundPage = defineType({
  name: 'notFoundPage',
  title: '404 page',
  type: 'document',
  icon: WarningOutlineIcon,
  fields: [
    defineField({ name: 'seo', type: 'seo' }),
    defineField({ name: 'code', type: 'string', title: 'Code', description: 'e.g. "404"' }),
    defineField({ name: 'heading', type: 'string', description: 'e.g. "Page Not Found"' }),
    defineField({ name: 'intro', type: 'text', rows: 2 }),
    defineField({
      name: 'links',
      type: 'array',
      title: 'Quick links',
      of: [defineArrayMember({ type: 'navLink' })],
    }),
    defineField({ name: 'ctaButtonLabel', type: 'string', description: 'e.g. "Make a Reservation"' }),
  ],
  preview: {
    prepare() {
      return { title: '404 page' }
    },
  },
})
