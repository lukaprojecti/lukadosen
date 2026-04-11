import type { CollectionConfig } from 'payload'

export const Letters: CollectionConfig = {
  slug: 'letters',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', '_status'],
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier — auto-generated from the title, edit if needed.',
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return (data.title as string)
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'category',
      type: 'select',
      admin: { position: 'sidebar' },
      options: [
        { label: 'Development', value: 'development' },
        { label: 'Architecture', value: 'architecture' },
        { label: 'Construction', value: 'construction' },
        { label: 'My Agency', value: 'my-agency' },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMMM yyyy',
        },
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      admin: {
        description: 'Short description shown in the letters list (1–2 sentences).',
      },
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
