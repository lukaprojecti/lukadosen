import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const dynamic = 'force-dynamic'

const CATEGORY_LABELS: Record<string, string> = {
  development: 'Development',
  architecture: 'Architecture',
  construction: 'Construction',
  'my-agency': 'My Agency',
}

function formatDate(dateStr?: string | null) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function LetterPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const payload = await getPayload({ config: configPromise })

  const { docs } = await payload.find({
    collection: 'letters',
    where: {
      slug: { equals: slug },
      _status: { equals: 'published' },
    },
    limit: 1,
  })

  if (!docs[0]) notFound()

  const letter = docs[0]

  return (
    <main>
      {/* ════════════════════════════════════════════
          Header
         ════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: 80,
          paddingBottom: 48,
          paddingLeft: 40,
          paddingRight: 40,
          maxWidth: 720,
        }}
      >
        {/* Category + date row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          {letter.category && (
            <span
              style={{
                fontSize: 13,
                fontWeight: 300,
                padding: '4px 12px',
                borderRadius: 'var(--radius)',
                backgroundColor: 'var(--border)',
                color: 'var(--foreground)',
              }}
            >
              {CATEGORY_LABELS[letter.category] ?? letter.category}
            </span>
          )}
          {letter.publishedAt && (
            <span style={{ fontSize: 13, fontWeight: 300, color: 'var(--muted)' }}>
              {formatDate(letter.publishedAt)}
            </span>
          )}
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          {letter.title}
        </h1>

        {/* Excerpt */}
        {letter.excerpt && (
          <p
            style={{
              marginTop: 20,
              fontSize: 18,
              fontWeight: 300,
              lineHeight: 1.6,
              color: 'var(--muted)',
            }}
          >
            {letter.excerpt}
          </p>
        )}
      </section>

      {/* Divider */}
      <div
        style={{
          height: 1,
          backgroundColor: 'var(--border)',
          marginLeft: 40,
          marginRight: 40,
          marginBottom: 48,
        }}
      />

      {/* ════════════════════════════════════════════
          Content
         ════════════════════════════════════════════ */}
      <section
        style={{
          paddingLeft: 40,
          paddingRight: 40,
          paddingBottom: 80,
          maxWidth: 680,
        }}
      >
        {letter.content ? (
          <div className="letter-content">
            <RichText data={letter.content} />
          </div>
        ) : (
          <p style={{ color: 'var(--muted)', fontWeight: 300 }}>No content yet.</p>
        )}
      </section>

      {/* ════════════════════════════════════════════
          Back link
         ════════════════════════════════════════════ */}
      <section style={{ paddingLeft: 40, paddingRight: 40, paddingBottom: 40 }}>
        <a
          href="/letters"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 14,
            fontWeight: 300,
            color: 'var(--muted)',
            textDecoration: 'none',
            transition: 'color 0.15s',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
          </svg>
          All letters
        </a>
      </section>

      {/* ════════════════════════════════════════════
          Subscribe CTA
         ════════════════════════════════════════════ */}
      <section style={{ paddingLeft: 40, paddingRight: 40, paddingBottom: 80 }}>
        <div
          style={{
            width: '100%',
            backgroundColor: 'var(--surface)',
            borderRadius: 'var(--radius)',
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h2 style={{ maxWidth: 440 }}>
            Enjoyed this letter? Get the next one in your inbox.
          </h2>

          <p style={{ marginTop: 12, fontSize: 18, fontWeight: 300 }}>
            <span style={{ marginRight: 6 }}>&rarr;</span>
            <em>Short, honest, always practical.</em>
          </p>

          <div
            style={{
              marginTop: 28,
              display: 'flex',
              gap: 0,
              maxWidth: 420,
              width: '100%',
            }}
          >
            <div style={{ position: 'relative', flex: 1 }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  width: '100%',
                  fontSize: 15,
                  fontWeight: 300,
                  padding: '12px 40px 12px 16px',
                  border: '1px solid var(--border)',
                  borderRight: 'none',
                  borderRadius: 'var(--radius) 0 0 var(--radius)',
                  background: 'var(--background)',
                  color: 'var(--foreground)',
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              />
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)' }}
              >
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </div>
            <button
              style={{
                fontSize: 15,
                fontWeight: 300,
                padding: '12px 24px',
                border: 'none',
                borderRadius: '0 var(--radius) var(--radius) 0',
                background: 'var(--foreground)',
                color: 'var(--accent)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: 'inherit',
              }}
            >
              Subscribe
            </button>
          </div>

          <p style={{ marginTop: 14, fontSize: 13, color: 'var(--muted)' }}>
            No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          Footer
         ════════════════════════════════════════════ */}
      <footer
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: 48,
          paddingBottom: 24,
        }}
      >
        <div style={{ height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span
            style={{
              fontSize: 24,
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--foreground)',
            }}
          >
            LUKA
          </span>
        </div>

        <nav style={{ display: 'flex', gap: 24, marginTop: 20 }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Letters', href: '/letters' },
            { label: 'Legal', href: '/legal' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: 'var(--muted)',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p style={{ marginTop: 20, fontSize: 13, color: 'var(--muted)' }}>
          &copy; 2026 The Luka Dosen Labs. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
