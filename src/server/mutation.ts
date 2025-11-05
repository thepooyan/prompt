"use server"
import { Blog, blogsTable, NewBlog, NewCategory, NewPrompt, NewRedirect, Prompt, promptCateTable, promptsTable, redirectsTable } from "@/db/schema"
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


type UpdateBlogInput = Partial<Omit<Blog, "id">>;

export const updateBlog = async (id: number, blog: UpdateBlogInput) => {
  try {
    await db.update(blogsTable).set({...blog, updated_at: new Date()}).where(eq(blogsTable.id, id))
    updateTag(cacheTags.blogs)
    revalidateTag(cacheTags.singleBlog, "max")
    return {ok: true}
  } catch(e) {
    return {ok: false, error: e}
  }
}

type promptEdit = Partial<Omit<Prompt, "id">>
export const updatePrompt = async (id:number, en: promptEdit) => {
  try {
    await db.update(promptsTable).set({...en, updated_at: new Date()}).where(eq(promptsTable.id, id))
    updateTag(cacheTags.prompts)
    revalidateTag(cacheTags.singlePrompt, "max")
    return {ok: true}
  } catch(e) {
    return {ok: false, error: e}
  }
}

export const insertCategory = async (c: NewCategory) => {
  try {
    await db.insert(promptCateTable).values(c)
    return {ok: true}
  } catch(e) {
    return {ok: false, error: e}
  }
}

export const deleteCategory = async (id: string) => {
  try {
    await db.delete(promptCateTable).where(eq(promptCateTable.id, id))
    return {ok: true}
  } catch(e) {
    return {ok: false, error: e}
  }
}

export const insertRedirect = async (c: NewRedirect) => {
  try {
    await db.insert(redirectsTable).values(c)
    return {ok: true}
  } catch(e) {
    return {ok: false, error: e}
  }
}

export const deleteRedirect = async (id: number) => {
  try {
    await db.delete(redirectsTable).where(eq(redirectsTable.id, id))
    return {ok: true}
  } catch(e) {
    return {ok: false, error: e}
  }
}
