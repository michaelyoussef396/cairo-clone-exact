import { defineType, defineField, defineArrayMember } from 'sanity'
import { CaseIcon } from '@sanity/icons'

export const functionRoomPage = defineType({
  name: 'functionRoomPage',
  title: 'Function room page',
  type: 'document',
  icon: CaseIcon,
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'experience', title: 'Experience' },
    { name: 'banquets', title: 'Banquets' },
    { name: 'features', title: 'Features' },
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
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subheading', type: 'text', rows: 4 }),
        defineField({ name: 'ctaButton', type: 'linkButton' }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
      ],
    }),

    defineField({
      name: 'experience',
      type: 'object',
      group: 'experience',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'text', rows: 4 }),
        defineField({ name: 'ctaButton', type: 'linkButton' }),
      ],
    }),

    defineField({
      name: 'banquetSection',
      type: 'object',
      group: 'banquets',
      description: 'The banquet packages themselves are managed under "Banquet packages" (shared with the menu page).',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'intro', type: 'text', rows: 2 }),
        defineField({ name: 'ctaButton', type: 'linkButton' }),
      ],
    }),

    defineField({
      name: 'privateEventFeatures',
      type: 'object',
      group: 'features',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'cards', type: 'array', of: [defineArrayMember({ type: 'infoCard' })] }),
        defineField({ name: 'linkParagraph', type: 'richText', description: 'Paragraph with inline links.' }),
      ],
    }),

    defineField({
      name: 'contactCta',
      type: 'object',
      group: 'cta',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'text', rows: 3 }),
        defineField({ name: 'bookButtonLabel', type: 'string' }),
        defineField({ name: 'callButtonLabel', type: 'string', description: 'e.g. "Call Us: 03 9654 1005"' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Function room page' }
    },
  },
})
