"use server"

import { s3 } from "@/s3"
import { PutObjectCommand } from "@aws-sdk/client-s3"

export async function uploadToS3(file: File) {
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const key = `${Date.now()}-${file.name}`

  await s3.send(new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME!,
    Key: key,
    Body: buffer,
    ContentType: file.type,
     ACL: "public-read"
  }))

  return `https://${process.env.BUCKET_URL}/${key}`
}
