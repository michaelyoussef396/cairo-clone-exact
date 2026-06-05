import { defineType, defineField, defineArrayMember } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const banquetPackage = defineType({
  name: 'banquetPackage',
  title: 'Banquet package',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({ name: 'price', type: 'string', title: 'Price', description: 'e.g. "$60"', validation: (r) => r.required() }),
    defineField({ name: 'perPerson', type: 'string', title: 'Per-person label', initialValue: 'per person' }),
    defineField({ name: 'order', type: 'number', title: 'Display order', validation: (r) => r.required() }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Lines',
      of: [defineArrayMember({ type: 'banquetLine' })],
    }),
  ],
  orderings: [
    { title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'price', subtitle: 'perPerson' },
  },
})
