"use server"

import { db } from "@/db"
import { Blog, blogsTable, NewBlog, NewPrompt, promptsTable } from "@/db/schema"
import { s3 } from "@/s3"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { eq, InferInsertModel } from "drizzle-orm"
import { PgNumeric, PgTable, TableConfig } from "drizzle-orm/pg-core"
import { env } from "./env"
import { cacheTagKey, cacheTags } from "./cache"
import { updateTag } from "next/cache"
import { revalidateTag } from "./dataFetching"

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

const insertRecordAction = async <T extends PgTable<TableConfig>, V extends InferInsertModel<T>>(table: T, values: V, tag: cacheTagKey) => {
  try {
    await db.insert(table).values(values)
    updateTag(tag)
    return { ok: true }
  } catch (e) {
    return { ok: false, error: e }
  }
}

export const uploadNewPrompt = async (newPrompt: NewPrompt)  => insertRecordAction(promptsTable, newPrompt, cacheTags.prompts)
export const uploadNewBlog = async (newBlog: NewBlog)        => insertRecordAction(blogsTable, newBlog, cacheTags.blogs)


export const editBlog = async (blog: Blog) => {
  try {
    let {id, ...other} = blog
    await db.update(blogsTable).set(other).where(eq(blogsTable.id, id))
    updateTag(cacheTags.blogs)
    return {ok: true}
  } catch(e) {
    return {ok: false, error: e}
  }
}