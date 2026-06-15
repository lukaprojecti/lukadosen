import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// TEMPORARY diagnostic — reports which env vars are visible at runtime in
// production (presence only; secret values are never returned). Delete once
// the Supabase storage env vars are confirmed active on Vercel.
export function GET() {
  return NextResponse.json({
    hasDatabaseUri: !!process.env.DATABASE_URI,
    hasPayloadSecret: !!process.env.PAYLOAD_SECRET,
    serverUrl: process.env.NEXT_PUBLIC_SERVER_URL || null,
    s3: {
      bucket: process.env.S3_BUCKET || null,
      endpoint: process.env.S3_ENDPOINT || null,
      region: process.env.S3_REGION || null,
      hasAccessKeyId: !!process.env.S3_ACCESS_KEY_ID,
      hasSecretKey: !!process.env.S3_SECRET_ACCESS_KEY,
    },
    // This boolean is exactly what the Payload config uses to enable Supabase.
    useS3: Boolean(process.env.S3_BUCKET && process.env.S3_ACCESS_KEY_ID),
  })
}
