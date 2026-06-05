import { defineType, defineField } from 'sanity'

export const scheduleDay = defineType({
  name: 'scheduleDay',
  title: 'Schedule day',
  type: 'object',
  fields: [
    defineField({ name: 'day', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'title', type: 'string', title: 'Event title' }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
    defineField({
      name: 'times',
      type: 'text',
      rows: 2,
      title: 'Times',
      description: 'May contain line breaks, e.g. "Belly Dancer: 9:00 PM\\nLive Dancer: 8:00 PM - 11:00 PM".',
    }),
  ],
  preview: {
    select: { title: 'day', subtitle: 'title' },
  },
})
