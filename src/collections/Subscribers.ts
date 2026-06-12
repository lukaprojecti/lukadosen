import type { CollectionConfig } from 'payload'

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'source', 'createdAt'],
    group: 'Newsletter',
  },
  access: {
    // The public /api/subscribe route writes through the Local API
    // (overrideAccess), so REST/GraphQL access stays locked to logged-in
    // admins. Nobody can read or scrape the list through the public API.
    create: () => false,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'source',
      type: 'text',
      admin: {
        description: 'Where the visitor subscribed from (e.g. homepage-hero, sidebar).',
      },
    },
  ],
}
