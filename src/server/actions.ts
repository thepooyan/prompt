"use server"

import { db } from "@/db"
import { NewPrompt, promptsTable } from "@/db/schema"
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

export const uploadNewPrompt = async (newPrompt: NewPrompt) => {
  try {
    await db.insert(promptsTable).values(newPrompt)
    return {ok: true}
  } catch(e) {
    return {ok: false, error: e}
  }
}