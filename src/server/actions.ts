"use server"
import { generateText } from "ai"
import { google } from "@ai-sdk/google"

import { s3 } from "@/s3"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { env } from "./env"

export async function uploadToS3(file: File) {
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const key = `/prompt/${Date.now()}-${file.name}`

  await s3.send(new PutObjectCommand({
    Bucket: env.BUCKET_NAME,
    Key: key,
    Body: buffer,
    ContentType: file.type,
     ACL: "public-read"
  }))

  return `https://${env.BUCKET_URL}/${key}`
}

export const aiSingleResponse = async (q: string) => {
  const result = await generateText({
    model: google('gemini-2.5-flash'),
    // system: prompt.telegram,
    prompt: q
  });
  return result.text
}
