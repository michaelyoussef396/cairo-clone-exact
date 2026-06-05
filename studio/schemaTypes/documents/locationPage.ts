import { defineType, defineField, defineArrayMember } from 'sanity'
import { PinIcon } from '@sanity/icons'

export const locationPage = defineType({
  name: 'locationPage',
  title: 'Location page',
  type: 'document',
  icon: PinIcon,
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'find', title: 'Find us' },
    { name: 'getHere', title: 'How to get here' },
    { name: 'parking', title: 'Parking guide' },
    { name: 'carlton', title: 'Carlton & Lygon St' },
    { name: 'things', title: 'Things to do' },
    { name: 'dining', title: 'Dining experience' },
    { name: 'tips', title: 'Insider tips' },
    { name: 'access', title: 'Accessibility' },
    { name: 'cta', title: 'CTA' },
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
        defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
      ],
    }),

    defineField({
      name: 'findUs',
      type: 'object',
      group: 'find',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'address', type: 'string' }),
        defineField({ name: 'body', type: 'richText' }),
        defineField({ name: 'mapTitle', type: 'string', title: 'Map iframe title' }),
      ],
    }),

    defineField({
      name: 'howToGetHere',
      type: 'object',
      group: 'getHere',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({
          name: 'tram',
          type: 'object',
          fields: [
            defineField({ name: 'heading', type: 'string' }),
            defineField({ name: 'body', type: 'richText' }),
          ],
        }),
        defineField({
          name: 'car',
          type: 'object',
          fields: [
            defineField({ name: 'heading', type: 'string' }),
            defineField({ name: 'body', type: 'richText' }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'parkingGuide',
      type: 'object',
      group: 'parking',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'intro', type: 'string' }),
        defineField({ name: 'cards', type: 'array', of: [defineArrayMember({ type: 'infoCard' })] }),
        defineField({
          name: 'nearbyCarParks',
          type: 'object',
          fields: [
            defineField({ name: 'heading', type: 'string' }),
            defineField({ name: 'items', type: 'array', of: [defineArrayMember({ type: 'infoCard' })] }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'carltonLygon',
      type: 'object',
      group: 'carlton',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'richText' }),
      ],
    }),

    defineField({
      name: 'thingsToDo',
      type: 'object',
      group: 'things',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({
          name: 'beforeDinner',
          type: 'object',
          fields: [
            defineField({ name: 'heading', type: 'string' }),
            defineField({ name: 'activities', type: 'array', of: [defineArrayMember({ type: 'infoCard' })] }),
          ],
        }),
        defineField({
          name: 'afterDinner',
          type: 'object',
          fields: [
            defineField({ name: 'heading', type: 'string' }),
            defineField({ name: 'activities', type: 'array', of: [defineArrayMember({ type: 'infoCard' })] }),
          ],
        }),
        defineField({ name: 'bottomNote', type: 'richText', description: 'Closing paragraph with inline links.' }),
      ],
    }),

    defineField({
      name: 'diningExperience',
      type: 'object',
      group: 'dining',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'richText' }),
      ],
    }),

    defineField({
      name: 'insiderTips',
      type: 'object',
      group: 'tips',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'tips', type: 'array', of: [defineArrayMember({ type: 'infoCard' })] }),
      ],
    }),

    defineField({
      name: 'accessibility',
      type: 'object',
      group: 'access',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'intro', type: 'string' }),
        defineField({
          name: 'physicalAccess',
          type: 'object',
          fields: [
            defineField({ name: 'heading', type: 'string' }),
            defineField({ name: 'items', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
          ],
        }),
        defineField({
          name: 'transportParking',
          type: 'object',
          fields: [
            defineField({ name: 'heading', type: 'string' }),
            defineField({ name: 'items', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'cta',
      type: 'object',
      group: 'cta',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'text', rows: 2 }),
        defineField({ name: 'buttons', type: 'array', of: [defineArrayMember({ type: 'linkButton' })] }),
        defineField({ name: 'hoursLine', type: 'string', description: 'e.g. "Sun-Thu 5pm-12am | Fri-Sat 5pm-1am"' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Location page' }
    },
  },
})
