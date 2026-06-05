import { defineType, defineField, defineArrayMember } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact page',
  type: 'document',
  icon: EnvelopeIcon,
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'info', title: 'Contact info' },
    { name: 'terrace', title: 'Terrace policy' },
    { name: 'map', title: 'Map' },
    { name: 'actions', title: 'Quick actions' },
    { name: 'reviews', title: 'Reviews' },
    { name: 'explore', title: 'Explore more' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'seo', type: 'seo', group: 'seo' }),

    defineField({
      name: 'hero',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subheading', type: 'text', rows: 2 }),
      ],
    }),

    defineField({
      name: 'contactInfo',
      type: 'object',
      group: 'info',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'intro', type: 'text', rows: 2 }),
        defineField({ name: 'mapsLinkText', type: 'string', description: 'e.g. "View on Google Maps →"' }),
        defineField({ name: 'linkParagraph', type: 'richText', description: 'Paragraph with inline links.' }),
      ],
    }),

    defineField({
      name: 'terracePolicy',
      type: 'object',
      group: 'terrace',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subheading', type: 'string' }),
        defineField({ name: 'boxHeading', type: 'string', description: 'e.g. "Crafting a Premium Experience"' }),
        defineField({ name: 'applicableAreaLabel', type: 'string' }),
        defineField({ name: 'applicableArea', type: 'string' }),
        defineField({ name: 'timePeriodLabel', type: 'string' }),
        defineField({ name: 'timePeriod', type: 'string' }),
        defineField({ name: 'minSpendLabel', type: 'string' }),
        defineField({ name: 'minSpend', type: 'string', description: 'e.g. "$40 per person"' }),
        defineField({ name: 'quote', type: 'text', rows: 3 }),
      ],
    }),

    defineField({
      name: 'mapSection',
      type: 'object',
      group: 'map',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'richText', description: 'Paragraph with inline link.' }),
        defineField({ name: 'mapTitle', type: 'string', title: 'Map iframe title' }),
      ],
    }),

    defineField({
      name: 'quickActions',
      type: 'object',
      group: 'actions',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'text', rows: 2 }),
        defineField({ name: 'cards', type: 'array', of: [defineArrayMember({ type: 'infoCard' })] }),
      ],
    }),

    defineField({
      name: 'reviews',
      type: 'object',
      group: 'reviews',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'rating', type: 'string', description: 'e.g. "4.8/5 on Google Reviews"' }),
        defineField({ name: 'items', type: 'array', of: [defineArrayMember({ type: 'reviewCard' })] }),
      ],
    }),

    defineField({
      name: 'exploreMore',
      type: 'object',
      group: 'explore',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subheading', type: 'string' }),
        defineField({ name: 'cards', type: 'array', of: [defineArrayMember({ type: 'infoCard' })] }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Contact page' }
    },
  },
})
