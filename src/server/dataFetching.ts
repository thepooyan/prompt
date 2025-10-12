"use server"
import { revalidateTag as r, unstable_cacheTag } from 'next/cache'
import { db } from "@/db"
import { Blog, blogsTable } from "@/db/schema"
import { eq } from 'drizzle-orm'

enum cacheTags {
    blogs,
    singleBlog
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
export const fetchSinglePost = async (slug: string): Promise<Blog | null> => {
    "use cache"
    cacheTag(cacheTags.singleBlog)
    const [blog] = await db.select().from(blogsTable).where(eq(blogsTable.slug, decodeURIComponent(slug))).limit(1)
    return blog
}