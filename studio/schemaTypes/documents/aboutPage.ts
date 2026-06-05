import { defineType, defineField, defineArrayMember } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About page',
  type: 'document',
  icon: UsersIcon,
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'roots', title: 'Egyptian roots' },
    { name: 'chefs', title: 'Chefs' },
    { name: 'stats', title: 'Stats' },
    { name: 'feedback', title: 'Feedback' },
    { name: 'mission', title: 'Mission' },
    { name: 'experience', title: 'Experience' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'seo', type: 'seo', group: 'seo' }),

    defineField({
      name: 'hero',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'headingPart1', type: 'string', description: 'e.g. "Our "' }),
        defineField({ name: 'headingPart2', type: 'string', description: 'e.g. "Story" (gold)' }),
        defineField({ name: 'subheading', type: 'text', rows: 2, description: 'May contain line breaks.' }),
        defineField({ name: 'description', type: 'text', rows: 2, description: 'May contain line breaks.' }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
      ],
    }),

    defineField({
      name: 'roots',
      type: 'object',
      group: 'roots',
      fields: [
        defineField({ name: 'heading', type: 'string', description: 'May contain line breaks.' }),
        defineField({ name: 'body', type: 'richText' }),
        defineField({ name: 'footerText', type: 'string', description: 'e.g. "INSPIRED BY THE STREETS OF EGYPT"' }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
      ],
    }),

    defineField({
      name: 'chefs',
      type: 'object',
      group: 'chefs',
      fields: [
        defineField({ name: 'heading', type: 'string', description: 'May contain line breaks.' }),
        defineField({ name: 'body', type: 'richText' }),
        defineField({ name: 'ctaButton', type: 'linkButton' }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
      ],
    }),

    defineField({
      name: 'stats',
      type: 'array',
      group: 'stats',
      of: [defineArrayMember({ type: 'statItem' })],
    }),

    defineField({
      name: 'feedback',
      type: 'object',
      group: 'feedback',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'reviews', type: 'array', of: [defineArrayMember({ type: 'reviewCard' })] }),
      ],
    }),

    defineField({
      name: 'mission',
      type: 'object',
      group: 'mission',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'richText' }),
        defineField({ name: 'founderAttribution', type: 'string', description: 'e.g. "— Sonny, Founder of Cairo By Nights"' }),
        defineField({ name: 'bottomNote', type: 'richText', description: 'Closing paragraph with inline links.' }),
      ],
    }),

    defineField({
      name: 'experience',
      type: 'object',
      group: 'experience',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subheading', type: 'string' }),
        defineField({ name: 'cards', type: 'array', of: [defineArrayMember({ type: 'infoCard' })] }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About page' }
    },
  },
})
