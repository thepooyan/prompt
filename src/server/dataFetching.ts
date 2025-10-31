"use server"
import { revalidateTag as r, cacheTag as c } from 'next/cache'
import { db } from "@/db"
import { Blog, blogsTable, promptsTable } from "@/db/schema"
import { eq } from 'drizzle-orm'
import { cacheTags } from './cache'

export const cacheTag = async (tag: typeof cacheTags[keyof typeof cacheTags]) => {
    return c(tag)
}

export const revalidate = async (tag: typeof cacheTags[keyof typeof cacheTags]) => {
  return r(tag, "max")
}

export const fetchBlogs = async () => {
  "use cache"
  cacheTag(cacheTags.blogs)
  return (await db.select().from(blogsTable)).reverse()
}
export const fetchSingleBlog = async (slug: string): Promise<Blog | null> => {
    "use cache"
    cacheTag(cacheTags.singleBlog)
    const [blog] = await db.select().from(blogsTable).where(eq(blogsTable.slug, decodeURIComponent(slug))).limit(1)
    return blog
}

export const getBlogById = async (id: number) => {
    const [blog] = await db.select().from(blogsTable).where(eq(blogsTable.id, id)).limit(1)
    return blog
}

export const getPromptById = async (id: number) => {
    const [en] = await db.select().from(promptsTable).where(eq(promptsTable.id, id)).limit(1)
    return en
}


export const fetchPrompts = async () => {
    "use cache"
    cacheTag(cacheTags.prompts)
    return await db.select().from(promptsTable)
}

export const fetchSinglePrompt = async (slug: string) => {
    "use cache"
    cacheTag(cacheTags.singleBlog)
    const [p] =  await db.select().from(promptsTable).where(eq(promptsTable.slug, decodeURIComponent(slug))).limit(1)
    return p
} 

export const fetchThreePrompts = async () => {
    "use cache"
    cacheTag(cacheTags.prompts)
  const posts = await db.select().from(promptsTable).limit(3)
  return posts
}

export const fetchFiveBlogs = async () => {
    "use cache"
    cacheTag(cacheTags.blogs)
    const data = await db.select().from(blogsTable).limit(5)
    return data
}
