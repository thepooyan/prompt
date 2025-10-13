"use server"
import { revalidateTag as r, unstable_cacheTag } from 'next/cache'
import { db } from "@/db"
import { Blog, blogsTable, promptsTable } from "@/db/schema"
import { eq } from 'drizzle-orm'

enum cacheTags {
    blogs,
    singleBlog,
    prompts,
    singlePrompt,
    threePrompts,
    fiveBlogs
}

export const cacheTag = async (tag: cacheTags) => {
    return unstable_cacheTag(tag.toString())
}

type arg = (tags: typeof cacheTags) => cacheTags
export const revalidateTag = async (arg: arg) => {
    let a = arg(cacheTags)
    return r(a.toString(), "max")
}

export const fetchBlogs = async () => {
  "use cache"
  cacheTag(cacheTags.blogs)
  return await db.select().from(blogsTable)
}
export const fetchSingleBlog = async (slug: string): Promise<Blog | null> => {
    "use cache"
    cacheTag(cacheTags.singleBlog)
    const [blog] = await db.select().from(blogsTable).where(eq(blogsTable.slug, decodeURIComponent(slug))).limit(1)
    return blog
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
    cacheTag(cacheTags.threePrompts)
  const posts = await db.select().from(promptsTable).limit(3)
  return posts
}

export const fetchFiveBlogs = async () => {
    "use cache"
    cacheTag(cacheTags.fiveBlogs)
    let data = await db.select().from(blogsTable).limit(5)
    return data
}