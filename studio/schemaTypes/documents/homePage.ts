import { defineType, defineField, defineArrayMember } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  icon: HomeIcon,
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'welcome', title: 'Welcome' },
    { name: 'stats', title: 'Stats' },
    { name: 'why', title: 'Why choose us' },
    { name: 'menu', title: 'Menu preview' },
    { name: 'testimonial', title: 'Testimonial' },
    { name: 'faq', title: 'FAQ' },
    { name: 'visit', title: 'Visit us' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'seo', type: 'seo', group: 'seo' }),

    // Hero
    defineField({
      name: 'hero',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'headingLine1', type: 'string', description: 'e.g. "Authentic" (gold)' }),
        defineField({ name: 'headingLine2', type: 'string', description: 'e.g. "Egyptian" (gold)' }),
        defineField({ name: 'headingLine3', type: 'string', description: 'e.g. "Restaurant in Carlton, Melbourne"' }),
        defineField({ name: 'subheading', type: 'text', rows: 3 }),
        defineField({ name: 'primaryCta', type: 'linkButton', title: 'Primary CTA' }),
        defineField({ name: 'secondaryCta', type: 'linkButton', title: 'Secondary CTA' }),
        defineField({ name: 'statNumber', type: 'string', description: 'e.g. "5000+"' }),
        defineField({ name: 'statText', type: 'string' }),
        defineField({ name: 'sideHeading1', type: 'string', description: 'e.g. "Loved by Melbourne"' }),
        defineField({ name: 'sideHeading2', type: 'string', description: 'e.g. "Foodies & Shisha Lovers"' }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
      ],
    }),

    // Welcome
    defineField({
      name: 'welcome',
      type: 'object',
      group: 'welcome',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subheading', type: 'string' }),
        defineField({ name: 'body', type: 'richText', description: 'All welcome paragraphs, including the one with inline links.' }),
      ],
    }),

    // Stats
    defineField({
      name: 'stats',
      type: 'array',
      group: 'stats',
      of: [defineArrayMember({ type: 'statItem' })],
    }),

    // Why choose us
    defineField({
      name: 'whyChoose',
      type: 'object',
      group: 'why',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subheading', type: 'string' }),
        defineField({ name: 'cards', type: 'array', of: [defineArrayMember({ type: 'infoCard' })] }),
        defineField({ name: 'bottomTextBold', type: 'string', description: 'e.g. "Join 5,000+ satisfied guests"' }),
        defineField({ name: 'bottomTextRest', type: 'string' }),
      ],
    }),

    // Menu preview
    defineField({
      name: 'menuPreview',
      type: 'object',
      group: 'menu',
      fields: [
        defineField({ name: 'sectionHeading', type: 'string', description: 'e.g. "Dine, Unwind, and Experience Cairo in Melbourne"' }),
        defineField({ name: 'testimonialText', type: 'text', rows: 3 }),
        defineField({ name: 'testimonialAuthor', type: 'string' }),
        defineField({ name: 'menuHeading', type: 'string' }),
        defineField({ name: 'menuSubheading', type: 'string' }),
        defineField({ name: 'linkText', type: 'string', description: 'e.g. "View Full Menu →"' }),
        defineField({
          name: 'categories',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'menuTile',
              fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
              ],
              preview: { select: { title: 'title', media: 'image' } },
            }),
          ],
        }),
      ],
    }),

    // Testimonial
    defineField({
      name: 'testimonial',
      type: 'object',
      group: 'testimonial',
      fields: [
        defineField({ name: 'label', type: 'string', description: 'e.g. "WHAT OUR CUSTOMER SAYS"' }),
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'text', rows: 4 }),
        defineField({ name: 'author', type: 'string' }),
        defineField({ name: 'linkText', type: 'string', description: 'e.g. "Check Our Story →"' }),
      ],
    }),

    // FAQ
    defineField({
      name: 'faq',
      type: 'object',
      group: 'faq',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'intro', type: 'text', rows: 2 }),
        defineField({ name: 'items', type: 'array', of: [defineArrayMember({ type: 'faqItem' })] }),
        defineField({ name: 'stillHaveQuestionsText', type: 'string', description: 'e.g. "Still have any questions?"' }),
      ],
    }),

    // Visit us
    defineField({
      name: 'visitUs',
      type: 'object',
      group: 'visit',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subheading', type: 'string' }),
        defineField({
          name: 'cards',
          type: 'array',
          description: 'Address / Public transport / Free parking. Body may contain line breaks.',
          of: [defineArrayMember({ type: 'infoCard' })],
        }),
        defineField({ name: 'ctaBoxIntro', type: 'text', rows: 4 }),
        defineField({ name: 'ctaBoxButton', type: 'linkButton' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Home page' }
    },
  },
})
