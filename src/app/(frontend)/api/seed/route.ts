import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'
import { seedLetters } from '@/seed/letters'
import { buildLexical } from '@/seed/lexical'

export const dynamic = 'force-dynamic'

async function runSeed() {
  const payload = await getPayload({ config: configPromise })

  // Wipe existing letters first so re-running the seed stays idempotent.
  const existing = await payload.find({
    collection: 'letters',
    limit: 1000,
    depth: 0,
  })

  for (const doc of existing.docs) {
    await payload.delete({ collection: 'letters', id: doc.id })
  }

  const created = []
  for (const letter of seedLetters) {
    const doc = await payload.create({
      collection: 'letters',
      data: {
        title: letter.title,
        slug: letter.slug,
        category: letter.category,
        excerpt: letter.excerpt,
        publishedAt: letter.publishedAt,
        content: buildLexical(letter.blocks) as never,
        _status: 'published',
      },
    })
    created.push({ id: doc.id, slug: doc.slug, title: doc.title })
  }

  return created
}

// Destructive: wipes and re-creates every letter. POST-only, never in a
// production build, and only with ALLOW_SEED=true, because local dev talks to
// the same database as production. Next.js serves HEAD through GET, so a GET
// handler here would let any crawler or link preview trigger it.
export async function POST() {
  if (process.env.NODE_ENV === 'production' || process.env.ALLOW_SEED !== 'true') {
    return new NextResponse(null, { status: 404 })
  }

  try {
    const created = await runSeed()
    return NextResponse.json({ ok: true, count: created.length, created })
  } catch (err) {
    console.error('[seed] failed', err)
    return NextResponse.json({ ok: false, error: 'Seed failed' }, { status: 500 })
  }
}
