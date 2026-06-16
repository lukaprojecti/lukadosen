/**
 * Normalize a Payload `upload` field value into a simple `{ url, alt }` the
 * frontend can render. When the field is populated (depth >= 1) it is the
 * media document; otherwise it may be an id, null, or undefined.
 */
export function toThumbnail(value: unknown): { url: string; alt: string } | undefined {
  if (value && typeof value === 'object') {
    const media = value as { url?: string | null; alt?: string | null }
    if (media.url) {
      return { url: media.url, alt: media.alt ?? '' }
    }
  }
  return undefined
}
