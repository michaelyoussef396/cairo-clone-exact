import { defineType, defineField } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const menuCategory = defineType({
  name: 'menuCategory',
  title: 'Menu category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'key',
      type: 'string',
      title: 'Category key',
      description: 'Internal grouping key (preserves the original data). e.g. "Entree", "mains", "Tea".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'displayTitle',
      type: 'string',
      title: 'Display title',
      description: 'Heading shown on the menu, e.g. "Entrees", "Main Dishes".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Display order',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'available',
      type: 'boolean',
      title: 'Available',
      initialValue: true,
    }),
  ],
  orderings: [
    { title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'displayTitle', subtitle: 'key', order: 'order' },
    prepare({ title, subtitle, order }) {
      return { title, subtitle: `${order}. ${subtitle}` }
    },
  },
})
