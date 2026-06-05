import { defineType, defineField } from 'sanity'

export const linkButton = defineType({
  name: 'linkButton',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'href',
      type: 'string',
      title: 'Path or URL',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'style',
      type: 'string',
      title: 'Style',
      options: {
        list: [
          { title: 'Primary (hero)', value: 'hero' },
          { title: 'Secondary (reserve)', value: 'reserve' },
        ],
        layout: 'radio',
      },
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'href' },
  },
})
