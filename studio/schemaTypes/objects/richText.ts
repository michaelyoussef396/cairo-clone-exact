import { defineType, defineArrayMember } from 'sanity'

/**
 * Reusable multi-paragraph rich text with inline links.
 * Preserves the current copy's inline markdown-style links — both
 * internal routes (e.g. "/events") and external URLs — as annotations.
 */
export const richText = defineType({
  name: 'richText',
  title: 'Rich text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Accent note', value: 'accentNote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
        ],
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'href',
                type: 'string',
                title: 'Path',
                description: 'Site-relative path, e.g. /events or /events#shisha',
              },
            ],
          },
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              { name: 'href', type: 'url', title: 'URL' },
              { name: 'openInNewTab', type: 'boolean', title: 'Open in new tab' },
            ],
          },
        ],
      },
    }),
  ],
})
