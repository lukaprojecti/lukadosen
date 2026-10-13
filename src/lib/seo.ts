import type { Metadata } from 'next'
import { isLanding } from './siteMode'

export const SITE_NAME = 'Luka Došen'
export const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

// Shared social preview image for every page (1200x630, lives in /public).
export const OG_IMAGE = isLanding
  ? '/2026-lukadosen-social-landing.jpg'
  : '/2026-lukadosen-social-review.jpg'

export const OG_LOCALE = isLanding ? 'de_CH' : 'en_US'

export const HOME_TITLE = isLanding
  ? 'Luka Došen | Planung von Wohnbauprojekten'
  : 'Luka Došen | Planning & Building: Projects & Systems'
export const HOME_DESCRIPTION = isLanding
  ? 'Ich plane coole Projekte mit coolen Leuten. Mit Projecti begleite ich Wohnbauprojekte von der ersten Parzellenidee bis zur Umsetzung.'
  : 'I plan projects and build systems. Decision frameworks, execution lessons, and transparent insights from planning to ownership. Follow the journey.'

/**
 * Build a page's Metadata with consistent Open Graph + Twitter tags and the
 * shared social image. `absoluteTitle` outputs the title verbatim (bypassing
 * the "%s | LUKA" template); `noIndex` keeps the page out of search results.
 */
export function buildMetadata(opts: {
  title: string
  description: string
  absoluteTitle?: boolean
  noIndex?: boolean
}): Metadata {
  const { title, description, absoluteTitle, noIndex } = opts
  return {
    metadataBase: new URL(SITE_URL),
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: 'website',
      locale: OG_LOCALE,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  }
}
