import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const payloadCSP =
  "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data:; connect-src 'self' https:;"

const nextConfig: NextConfig = {
  images: {
    // Letter thumbnails live in the public Supabase Storage bucket and are
    // served from its CDN. Next/Image fetches + resizes them from here.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nkusldnkgzuxogdcqayk.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/admin/:path*',
        headers: [{ key: 'Content-Security-Policy', value: payloadCSP }],
      },
      {
        source: '/api/:path*',
        headers: [{ key: 'Content-Security-Policy', value: payloadCSP }],
      },
    ]
  },
}

export default withPayload(nextConfig)
