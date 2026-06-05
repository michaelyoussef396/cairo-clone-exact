import { defineType, defineField } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Meta title' }),
    defineField({ name: 'description', type: 'text', rows: 3, title: 'Meta description' }),
    defineField({ name: 'canonical', type: 'url', title: 'Canonical URL' }),
    defineField({
      name: 'ogType',
      type: 'string',
      title: 'Open Graph type',
      description: 'e.g. website, article, restaurant',
    }),
    defineField({ name: 'noindex', type: 'boolean', title: 'No-index this page' }),
  ],
})
