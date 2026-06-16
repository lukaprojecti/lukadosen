// Public base of the Supabase Storage bucket the media collection uploads to.
// The project ref is not secret (it is part of every public Supabase URL).
// Serving images straight from this CDN is far faster than proxying them
// through Payload's /api/media/file route (~0.5s vs ~3.5s).
const SUPABASE_PUBLIC_BASE =
  'https://nkusldnkgzuxogdcqayk.supabase.co/storage/v1/object/public/media'

/**
 * Normalize a Payload `upload` field value into a simple `{ url, alt }` the
 * frontend can render. When the field is populated (depth >= 1) it is the
 * media document; otherwise it may be an id, null, or undefined.
 *
 * Prefers the direct Supabase CDN URL (built from the filename) so the image
 * is served from the CDN and resized by Next/Image, falling back to whatever
 * `url` Payload provides.
 */
export function toThumbnail(value: unknown): { url: string; alt: string } | undefined {
  if (value && typeof value === 'object') {
    const media = value as { url?: string | null; alt?: string | null; filename?: string | null }
    const url = media.filename
      ? `${SUPABASE_PUBLIC_BASE}/${encodeURIComponent(media.filename)}`
      : media.url || undefined
    if (url) {
      return { url, alt: media.alt ?? '' }
    }
  }
  return undefined
}
