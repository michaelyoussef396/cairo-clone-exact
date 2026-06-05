import { defineType, defineField, defineArrayMember } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

export const eventsPage = defineType({
  name: 'eventsPage',
  title: 'Events page',
  type: 'document',
  icon: CalendarIcon,
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'gallery', title: 'Gallery' },
    { name: 'schedule', title: 'Weekly schedule' },
    { name: 'shisha', title: 'Shisha lounge' },
    { name: 'entertainment', title: 'Entertainment' },
    { name: 'cta', title: 'CTA' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'seo', type: 'seo', group: 'seo' }),

    defineField({
      name: 'hero',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'heading', type: 'text', rows: 2 }),
        defineField({ name: 'subheading', type: 'text', rows: 2 }),
        defineField({ name: 'tagline', type: 'string' }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
      ],
    }),

    defineField({
      name: 'gallery',
      type: 'object',
      group: 'gallery',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'intro', type: 'text', rows: 3 }),
        defineField({
          name: 'images',
          type: 'array',
          of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
        }),
      ],
    }),

    defineField({
      name: 'weeklySchedule',
      type: 'object',
      group: 'schedule',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'intro', type: 'string' }),
        defineField({ name: 'days', type: 'array', of: [defineArrayMember({ type: 'scheduleDay' })] }),
      ],
    }),

    defineField({
      name: 'shisha',
      type: 'object',
      group: 'shisha',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'intro', type: 'text', rows: 2 }),
        defineField({ name: 'leftHeading', type: 'string' }),
        defineField({ name: 'leftBody', type: 'richText' }),
        defineField({ name: 'featuredFlavorsHeading', type: 'string', description: 'e.g. "Featured Flavors"' }),
        defineField({ name: 'flavors', type: 'array', of: [defineArrayMember({ type: 'shishaFlavor' })] }),
        defineField({ name: 'closingParagraph', type: 'text', rows: 3 }),
        defineField({ name: 'whyChooseHeading', type: 'string', description: 'e.g. "Why Choose Our Shisha Lounge?"' }),
        defineField({ name: 'whyChooseFeatures', type: 'array', of: [defineArrayMember({ type: 'infoCard' })] }),
        defineField({ name: 'infoBoxText', type: 'string' }),
        defineField({ name: 'infoBoxSubtext', type: 'string' }),
      ],
    }),

    defineField({
      name: 'entertainment',
      type: 'object',
      group: 'entertainment',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'intro', type: 'string' }),
        defineField({
          name: 'bellyDancing',
          type: 'object',
          fields: [
            defineField({ name: 'heading', type: 'string' }),
            defineField({ name: 'body', type: 'richText' }),
          ],
        }),
        defineField({
          name: 'music',
          type: 'object',
          fields: [
            defineField({ name: 'heading', type: 'string' }),
            defineField({ name: 'body', type: 'richText' }),
          ],
        }),
        defineField({
          name: 'whatToExpect',
          type: 'object',
          fields: [
            defineField({ name: 'heading', type: 'string' }),
            defineField({ name: 'body', type: 'text', rows: 4 }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'cta',
      type: 'object',
      group: 'cta',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'text', rows: 2 }),
        defineField({ name: 'linkText', type: 'richText', description: 'Line with inline link to the function room.' }),
        defineField({ name: 'buttonLabel', type: 'string' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Events page' }
    },
  },
})
