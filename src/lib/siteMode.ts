/**
 * Site mode switch. `landing` shows only the German landing page (plus /legal),
 * `full` is the complete site (home, about, letters, newsletter).
 * NEXT_PUBLIC_* is inlined at build time, so switching needs a redeploy.
 */
export type SiteMode = 'landing' | 'full'

export const SITE_MODE: SiteMode =
  process.env.NEXT_PUBLIC_SITE_MODE === 'landing' ? 'landing' : 'full'

export const isLanding = SITE_MODE === 'landing'
