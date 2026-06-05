import { defineType, defineField, defineArrayMember } from 'sanity'
import { RestaurantIcon } from '@sanity/icons'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu item',
  type: 'document',
  icon: RestaurantIcon,
  fields: [
    defineField({
      name: 'isSubHeading',
      type: 'boolean',
      title: 'Is a sub-heading divider',
      description:
        'When on, this is a section divider inside a category (e.g. "Classic Teas", "Sparkling Wines"), not a real item.',
      initialValue: false,
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      description:
        'The displayed name exactly as it should appear (keep dietary tags like "(GF)" / "(Vegan)" in the name). Do NOT include the price.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      title: 'Description',
      hidden: ({ parent }) => parent?.isSubHeading === true,
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'menuCategory' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subSection',
      type: 'string',
      title: 'Sub-section',
      description: 'Optional label of the sub-heading this item sits under (e.g. "Classic Teas").',
      hidden: ({ parent }) => parent?.isSubHeading === true,
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order within category',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'prices',
      type: 'array',
      title: 'Prices',
      description:
        'One entry for a single price; multiple for wine (Glass/Bottle) or multi-size items (Small/Medium/Large/Family).',
      of: [defineArrayMember({ type: 'priceTier' })],
      hidden: ({ parent }) => parent?.isSubHeading === true,
    }),
    defineField({
      name: 'priceText',
      type: 'string',
      title: 'Price badge override',
      description:
        'Optional. Exact badge string when it differs from the composed prices, e.g. "Glass $14 • Bottle $46" or "Bottle $13".',
      hidden: ({ parent }) => parent?.isSubHeading === true,
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.isSubHeading === true,
    }),
    defineField({
      name: 'imageAlt',
      type: 'string',
      title: 'Image alt text',
      hidden: ({ parent }) => parent?.isSubHeading === true,
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Dietary tags (metadata)',
      description: 'Optional, for future filtering only. Does NOT change the displayed name.',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
      hidden: ({ parent }) => parent?.isSubHeading === true,
    }),
    defineField({
      name: 'available',
      type: 'boolean',
      title: 'Available',
      initialValue: true,
      hidden: ({ parent }) => parent?.isSubHeading === true,
    }),
  ],
  orderings: [
    { title: 'Menu order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', category: 'category.displayTitle', isSub: 'isSubHeading', media: 'image' },
    prepare({ title, category, isSub, media }) {
      return {
        title: isSub ? `— ${title} —` : title,
        subtitle: category,
        media,
      }
    },
  },
})
