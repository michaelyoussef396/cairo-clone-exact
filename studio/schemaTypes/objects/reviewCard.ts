import { defineType, defineField } from 'sanity'

export const reviewCard = defineType({
  name: 'reviewCard',
  title: 'Review',
  type: 'object',
  fields: [
    defineField({ name: 'author', type: 'string', title: 'Author', validation: (r) => r.required() }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Card heading',
      description: 'Optional heading shown above the quote (may contain a line break).',
    }),
    defineField({ name: 'body', type: 'text', rows: 4, title: 'Quote', validation: (r) => r.required() }),
    defineField({ name: 'source', type: 'string', title: 'Source', description: 'e.g. "Google Review"' }),
    defineField({ name: 'rating', type: 'string', title: 'Rating', description: 'e.g. "4.8/5"' }),
  ],
  preview: {
    select: { title: 'author', subtitle: 'body' },
  },
})
