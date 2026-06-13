import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
    description: 'Images used across the site — letter thumbnails, etc.',
  },
  // Images are shown on the public site, so anyone can read them.
  // Only authenticated admins can upload, update, or delete.
  access: {
    read: () => true,
  },
  upload: {
    mimeTypes: ['image/*'],
    // Generated on upload via sharp. The list view + the thumbnail field
    // preview use `thumbnail`; the public letters UI can use `card`.
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'card', width: 1024, height: 768, position: 'centre' },
    ],
    adminThumbnail: 'thumbnail',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description: 'Describe the image for screen readers and SEO (e.g. "Luka at his desk").',
      },
    },
  ],
}
