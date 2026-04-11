import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const payloadCSP =
  "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data:; connect-src 'self' https:;"

const nextConfig: NextConfig = {
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
