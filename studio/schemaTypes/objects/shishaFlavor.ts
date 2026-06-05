import { defineType, defineField } from 'sanity'

export const shishaFlavor = defineType({
  name: 'shishaFlavor',
  title: 'Shisha flavor',
  type: 'object',
  fields: [
    defineField({ name: 'emoji', type: 'string', title: 'Emoji' }),
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 2, validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: 'name', emoji: 'emoji' },
    prepare({ title, emoji }) {
      return { title: [emoji, title].filter(Boolean).join(' ') }
    },
  },
})
