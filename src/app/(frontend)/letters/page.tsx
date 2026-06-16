import { getPayload } from 'payload'
import configPromise from '@payload-config'
import LettersClient, { type Letter } from './LettersClient'
import { toThumbnail } from '@/lib/thumbnail'

export const dynamic = 'force-dynamic'

export default async function LettersPage() {
  const payload = await getPayload({ config: configPromise })

  const { docs } = await payload.find({
    collection: 'letters',
    where: {
      _status: { equals: 'published' },
    },
    sort: '-publishedAt',
    limit: 100,
    depth: 1, // populate the thumbnail media relation
  })

  // Map Payload docs to the shape LettersClient expects
  const letters: Letter[] = docs.map((doc) => ({
    id: String(doc.id),
    title: doc.title,
    slug: doc.slug ?? String(doc.id),
    category: doc.category as Letter['category'],
    excerpt: doc.excerpt ?? undefined,
    publishedAt: doc.publishedAt ?? undefined,
    thumbnail: toThumbnail(doc.thumbnail),
  }))

  return <LettersClient letters={letters} />
}
