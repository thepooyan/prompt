import { S3Client } from "@aws-sdk/client-s3"

console.log(process.env.BUCKET_SECRET!)
console.log(process.env.BUCKET_KEY!)

export const s3 = new S3Client({
  endpoint: `https://${process.env.BUCKET_URL}`,
  region: "a",
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.BUCKET_KEY!,
    secretAccessKey: process.env.BUCKET_SECRET!
  }
})
