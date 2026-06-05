import { defineType, defineField } from 'sanity'

export const navLink = defineType({
  name: 'navLink',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Label', validation: (r) => r.required() }),
    defineField({ name: 'href', type: 'string', title: 'Path or URL', validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'href' },
  },
})
