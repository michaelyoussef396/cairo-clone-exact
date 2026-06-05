import { defineType, defineField } from 'sanity'

/**
 * One line in a banquet package. Mirrors the three render branches:
 * - label only (a note line, e.g. "(Vegans/vegetarians get their own Koshari)")
 * - label + value (a titled row, e.g. "Entree": "Chicken Wings...")
 * - value only (a continuation row under the previous label)
 */
export const banquetLine = defineType({
  name: 'banquetLine',
  title: 'Banquet line',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string', title: 'Label' }),
    defineField({ name: 'value', type: 'string', title: 'Value' }),
  ],
  preview: {
    select: { label: 'label', value: 'value' },
    prepare({ label, value }) {
      return { title: [label, value].filter(Boolean).join(': ') || 'Empty line' }
    },
  },
})
