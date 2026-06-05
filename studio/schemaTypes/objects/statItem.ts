import { defineType, defineField } from 'sanity'

export const statItem = defineType({
  name: 'statItem',
  title: 'Stat',
  type: 'object',
  fields: [
    defineField({ name: 'value', type: 'string', title: 'Number', description: 'e.g. "5000+"', validation: (r) => r.required() }),
    defineField({ name: 'label', type: 'string', title: 'Label', validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: 'value', subtitle: 'label' },
  },
})
