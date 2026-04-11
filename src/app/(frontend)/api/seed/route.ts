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

export async function GET() {
  try {
    const created = await runSeed()
    return NextResponse.json({ ok: true, count: created.length, created })
  } catch (err) {
    console.error('[seed] failed', err)
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}

export async function POST() {
  return GET()
}
