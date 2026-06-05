import { defineType, defineField, defineArrayMember } from 'sanity'

export const openingHours = defineType({
  name: 'openingHours',
  title: 'Opening hours',
  type: 'object',
  fields: [
    defineField({
      name: 'weekdays',
      type: 'string',
      title: 'Weekdays line',
      description: 'Display string, e.g. "Sunday – Thursday: 5:00pm – 11:30pm".',
    }),
    defineField({
      name: 'weekends',
      type: 'string',
      title: 'Weekends line',
      description: 'Display string, e.g. "Friday & Saturday: 5:00pm – 12:30am".',
    }),
    defineField({
      name: 'structured',
      type: 'array',
      title: 'Structured hours (for SEO / JSON-LD)',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'hoursSpec',
          fields: [
            defineField({
              name: 'days',
              type: 'array',
              of: [{ type: 'string' }],
              options: {
                list: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              },
            }),
            defineField({ name: 'opens', type: 'string', description: '24h, e.g. "17:00"' }),
            defineField({ name: 'closes', type: 'string', description: '24h, e.g. "23:30"' }),
          ],
        }),
      ],
    }),
  ],
})
