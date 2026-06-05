import { defineType, defineField } from 'sanity'

/**
 * Reusable card with an optional emoji/icon, a title, body copy and an
 * optional link. Covers Why-Choose cards, feature cards, parking cards,
 * activity items, shisha "why choose" features, private-event features,
 * and explore-more cards.
 */
export const infoCard = defineType({
  name: 'infoCard',
  title: 'Card',
  type: 'object',
  fields: [
    defineField({
      name: 'emoji',
      type: 'string',
      title: 'Emoji / icon',
      description: 'Optional leading emoji, e.g. "🍽️". Leave blank if the card uses a built-in icon.',
    }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'body', type: 'text', rows: 4, title: 'Body' }),
    defineField({ name: 'href', type: 'string', title: 'Link (optional)' }),
    defineField({
      name: 'buttonLabel',
      type: 'string',
      title: 'Button label (optional)',
      description: 'When the card has an action button, e.g. "Book Now".',
    }),
  ],
  preview: {
    select: { title: 'title', emoji: 'emoji' },
    prepare({ title, emoji }) {
      return { title: [emoji, title].filter(Boolean).join(' ') }
    },
  },
})
