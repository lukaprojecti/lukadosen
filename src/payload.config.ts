import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import sharp from 'sharp'
import { Letters } from './collections/Letters'
import { Media } from './collections/Media'
import { Subscribers } from './collections/Subscribers'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Only route uploads to Supabase Storage when S3 creds are configured.
// Without them (e.g. a fresh local checkout) Payload falls back to local
// disk so the admin still works — but uploads won't persist on Vercel.
const useS3 = Boolean(process.env.S3_BUCKET && process.env.S3_ACCESS_KEY_ID)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  editor: lexicalEditor(),
  collections: [
    Letters,
    Media,
    Subscribers,
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    ...(useS3
      ? [
          s3Storage({
            collections: {
              media: true,
            },
            // Upload straight from the browser to Supabase via a presigned URL.
            // Required on Vercel: server-side uploads route the file through the
            // serverless function, which hard-caps request bodies at 4.5 MB.
            clientUploads: true,
            bucket: process.env.S3_BUCKET as string,
            config: {
              endpoint: process.env.S3_ENDPOINT,
              region: process.env.S3_REGION,
              // Supabase's S3-compatible API requires path-style addressing.
              forcePathStyle: true,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
              },
            },
          }),
        ]
      : []),
  ],
})
