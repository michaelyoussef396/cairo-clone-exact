import { defineType, defineField } from 'sanity'

/**
 * A single price for a menu item. Covers single prices, glass/bottle wine
 * columns, and multi-size items (Small/Medium/Large/Family).
 */
export const priceTier = defineType({
  name: 'priceTier',
  title: 'Price',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      description: 'Optional, e.g. "Glass", "Bottle", "Small". Leave blank for a single price.',
    }),
    defineField({
      name: 'amount',
      type: 'string',
      title: 'Amount',
      description: 'Include the currency symbol, e.g. "$19".',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { label: 'label', amount: 'amount' },
    prepare({ label, amount }) {
      return { title: [label, amount].filter(Boolean).join(' — ') }
    },
  },
})
