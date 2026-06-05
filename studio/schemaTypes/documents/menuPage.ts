import { defineType, defineField } from 'sanity'
import { BillIcon } from '@sanity/icons'

/**
 * Editable copy surrounding the menu on /menu (NewMenu.tsx). The menu items
 * and banquet packages themselves live in their own document types.
 */
export const menuPage = defineType({
  name: 'menuPage',
  title: 'Menu page',
  type: 'document',
  icon: BillIcon,
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'traditions', title: 'Culinary traditions' },
    { name: 'banquets', title: 'Banquet intro' },
    { name: 'ingredients', title: 'Fresh ingredients' },
    { name: 'cta', title: 'CTA' },
    { name: 'placeholder', title: 'Placeholder' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'seo', type: 'seo', group: 'seo' }),

    defineField({
      name: 'placeholderHeading',
      type: 'string',
      group: 'placeholder',
      description: 'Shown when the menu is hidden, e.g. "Our menu is being updated — please check back soon!".',
    }),

    defineField({
      name: 'hero',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subheading', type: 'string' }),
      ],
    }),

    defineField({
      name: 'traditions',
      type: 'object',
      group: 'traditions',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subheading', type: 'string' }),
        defineField({ name: 'body', type: 'richText' }),
      ],
    }),

    defineField({
      name: 'banquetIntro',
      type: 'object',
      group: 'banquets',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'intro', type: 'text', rows: 2 }),
        defineField({
          name: 'infoBoxes',
          type: 'array',
          of: [{ type: 'infoCard' }],
        }),
        defineField({ name: 'linkParagraph', type: 'richText', description: 'Closing paragraph with inline links.' }),
      ],
    }),

    defineField({
      name: 'ingredients',
      type: 'object',
      group: 'ingredients',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subheading', type: 'string' }),
        defineField({ name: 'body', type: 'richText' }),
      ],
    }),

    defineField({
      name: 'cta',
      type: 'object',
      group: 'cta',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'text', rows: 2 }),
        defineField({ name: 'buttonLabel', type: 'string' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Menu page' }
    },
  },
})
