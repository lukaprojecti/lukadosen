import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import LettersClient, { type Letter } from './LettersClient'
import { toThumbnail } from '@/lib/thumbnail'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = buildMetadata({
  title: 'Letters | Honest Notes on Planning & Building Projects',
  description:
    "The full archive of Luka's letters — short, practical notes on how real estate projects get planned and built, the systems behind them, and the journey to ownership.",
  absoluteTitle: true,
})

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
