"use server"

import { db } from "@/db"
import { blogsTable, NewBlog, NewPrompt, promptsTable } from "@/db/schema"
import { s3 } from "@/s3"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { InferInsertModel } from "drizzle-orm"
import { PgTable, TableConfig } from "drizzle-orm/pg-core"

export async function uploadToS3(file: File) {
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const key = `/prompt/${Date.now()}-${file.name}`

  await s3.send(new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME!,
    Key: key,
    Body: buffer,
    ContentType: file.type,
     ACL: "public-read"
  }))

  return `https://${process.env.BUCKET_URL}/${key}`
}

const insertRecordAction = async <T extends PgTable<TableConfig>, V extends InferInsertModel<T>>(table: T, values: V) => {
  try {
    await db.insert(table).values(values)
    return { ok: true }
  } catch (e) {
    return { ok: false, error: e }
  }
}

export const uploadNewPrompt = async (newPrompt: NewPrompt)  => insertRecordAction(promptsTable, newPrompt)
export const uploadNewBlog = async (newBlog: NewBlog)        => insertRecordAction(blogsTable, newBlog)