"use server"
import { revalidateTag as r, cacheTag as c } from 'next/cache'
import { db } from "@/db"
import { Blog, blogsTable, promptCateTable, promptsTable, promptType, redirectsTable } from "@/db/schema"
import { desc, eq } from 'drizzle-orm'
import { cacheTags } from './cache'
import { HeaderSub } from '@/components/layout/HeaderSub'

export const cacheTag = async (tag: typeof cacheTags[keyof typeof cacheTags]) => {
    return c(tag)
}

export const revalidate = async (tag: typeof cacheTags[keyof typeof cacheTags]) => {
  return r(tag, "max")
}

export const fetchBlogs = async () => {
  "use cache"
  cacheTag(cacheTags.blogs)
  return await db.select().from(blogsTable)
      .orderBy(
        desc(blogsTable.updated_at),
      )
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


export const getAllPrompts = async () => {
  "use cache"
  cacheTag(cacheTags.prompts)
  return await db.query.promptsTable.findMany({
    with: {category: true},
    where: eq(promptsTable.type, "prompt"),
    orderBy: desc(promptsTable.updated_at),
  })
}

export const getAllN8n = async () => {
  "use cache"
  cacheTag(cacheTags.prompts)
  return await db.query.promptsTable.findMany({
    with: {category: true},
    where: eq(promptsTable.type, "n8n"),
    orderBy: desc(promptsTable.updated_at),
  })
}

export const fetchSinglePrompt = async (slug: string) => {
  "use cache"
  cacheTag(cacheTags.singleBlog)
  return await db.query.promptsTable.findFirst({
    with: {category: true},
    where: eq(promptsTable.slug, decodeURIComponent(slug))
  })
} 
export type PromptWithRelations = NonNullable<Awaited<ReturnType<typeof fetchSinglePrompt>>>

export const fetchThreePrompts = async () => {
  "use cache"
  cacheTag(cacheTags.prompts)
  return await db.query.promptsTable.findMany({
    limit: 3,
    orderBy: desc(promptsTable.updated_at),
    where: eq(promptsTable.type, "prompt"),
    with: {category: true}
  })
}

export const fetchTwoPrompts = async () => {
  "use cache"
  cacheTag(cacheTags.prompts)
  return await db.query.promptsTable.findMany({
    limit: 2,
    orderBy: desc(promptsTable.updated_at),
    where: eq(promptsTable.type, "prompt"),
    with: {category: true}
  })
}

export const fetchFiveBlogs = async () => {
    "use cache"
    cacheTag(cacheTags.blogs)
    const data = await db.select().from(blogsTable).limit(5)
      .orderBy(
        desc(blogsTable.updated_at),
      )
    return data
}

export const getAllCategories = async (type: promptType) => {
  return await db.query.promptCateTable.findMany({where: eq(promptCateTable.type, type)})
}

export const getAllRedirects = async () => {
  return await db.select().from(redirectsTable)
}

export const getAllMenuItems = async ():Promise<HeaderSub[]> => {
  "use cache"
  cacheTag(cacheTags.menuItems)
  const result = await db.query.promptCateTable.findMany()

  const result1 = result.filter(r => r.type === "prompt")
  const result2 = result.filter(r => r.type === "n8n")
  
  return [
    {
      mainItem: {
        name: "پرامپت", slug: "Prompts", 
      },
      subItems: result1
    },
    {
      mainItem: {
        name: "n8n", slug: "n8n", 
      },
      subItems: result2
    },
    {
      mainItem: {
        name: "ابزار", slug: "Tools", 
      },
      subItems: []
    },
  ]
}
