"use server"
import { Blog, blogsTable, NewBlog, NewPrompt, Prompt, promptsTable } from "@/db/schema"
import { eq, InferInsertModel } from "drizzle-orm"
import { PgTable, TableConfig } from "drizzle-orm/pg-core"
import { cacheTagKey, cacheTags } from "./cache"
import { revalidateTag, updateTag } from "next/cache"
import { db } from "@/db"

export const deleteBlog = async (id: number) => {
    try {
        await db.delete(blogsTable).where(eq(blogsTable.id, id))
        updateTag(cacheTags.blogs)
        return {ok: true}
    } catch (e) {
        return {ok: false, error:e}
    }
}

export const deletePrompt = async (id: number) => {
    try {
        await db.delete(promptsTable).where(eq(promptsTable.id, id))
        updateTag(cacheTags.prompts)
        return {ok: true}
    } catch (e) {
        return {ok: false, error:e}
    }
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

export const insertPrompt = async (newPrompt: NewPrompt)  => insertRecordAction(promptsTable, newPrompt, cacheTags.prompts)
export const insertBlog = async (newBlog: NewBlog)        => insertRecordAction(blogsTable, newBlog, cacheTags.blogs)


export const updateBlog = async (blog: Blog) => {
  try {
    let {id, ...other} = blog
    await db.update(blogsTable).set(other).where(eq(blogsTable.id, id))
    updateTag(cacheTags.blogs)
    revalidateTag(cacheTags.singleBlog, "max")
    return {ok: true}
  } catch(e) {
    return {ok: false, error: e}
  }
}

export const updatePrompt = async (en: Prompt) => {
  try {
    let {id, ...other} = en
    await db.update(promptsTable).set(other).where(eq(promptsTable.id, id))
    updateTag(cacheTags.prompts)
    return {ok: true}
  } catch(e) {
    return {ok: false, error: e}
  }
}