import { env } from "@/server/env"
import { S3Client } from "@aws-sdk/client-s3"

export const s3 = new S3Client({
  endpoint: `https://${env.BUCKET_URL}`,
  region: "a",
  forcePathStyle: true,
  credentials: {
    accessKeyId: env.BUCKET_KEY,
    secretAccessKey: env.BUCKET_SECRET
  }
})
