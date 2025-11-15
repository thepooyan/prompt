"use server"
import { db } from "@/db"
import { authorsTable, Blog, blogsTable, promptCateTable, promptsTable, promptType, redirectsTable } from "@/db/schema"
import { desc, eq } from 'drizzle-orm'
import { cacheTag, cacheTags } from './cache'
import { navItem } from '@/components/layout/Burger'

// Blog

export const getAllBlogs = async () => {
  "use cache"
  cacheTag(cacheTags.blogs)
  return await db.select().from(blogsTable)
      .orderBy(
        desc(blogsTable.updated_at),
      )
}

export const getBlogBySlug = async (slug: string): Promise<Blog | null> => {
    "use cache"
    cacheTag(cacheTags.singleBlog)
    const [blog] = await db.select().from(blogsTable).where(eq(blogsTable.slug, decodeURIComponent(slug))).limit(1)
    return blog
}

export const getBlogById = async (id: number) => {
  "use cache"
  cacheTag(cacheTags.singleBlog)
    const [blog] = await db.select().from(blogsTable).where(eq(blogsTable.id, id)).limit(1)
    return blog
}

export const getFiveBlogs = async () => {
    "use cache"
    cacheTag(cacheTags.blogs)
    const data = await db.select().from(blogsTable).limit(5)
      .orderBy(
        desc(blogsTable.updated_at),
      )
    return data
}

// prompt 

const promptWith = {with: {category: true, author: true}} as const


export const getPromptById = async (id: number) => {
    const [en] = await db.select().from(promptsTable).where(eq(promptsTable.id, id)).limit(1)
    return en
}
export const getAllPrompts = async (type: promptType) => {
  "use cache"
  cacheTag(cacheTags.prompts)
  return await db.query.promptsTable.findMany({
    ...promptWith,
    where: eq(promptsTable.type, type),
    orderBy: desc(promptsTable.updated_at),
  })
}

export const getAllN8n = async () => {
  "use cache"
  cacheTag(cacheTags.prompts)
  return await db.query.promptsTable.findMany({
    ...promptWith,
    where: eq(promptsTable.type, "n8n"),
    orderBy: desc(promptsTable.updated_at),
  })
}

export const getPromptBySlug = async (slug: string) => {
  "use cache"
  cacheTag(cacheTags.singleBlog)
  return await db.query.promptsTable.findFirst({
    ...promptWith,
    where: eq(promptsTable.slug, decodeURIComponent(slug))
  })
} 

export const getPromptsByCategory = async (cate: string) => {
  "use cache"
  cacheTag(cacheTags.prompts)
  return await db.query.promptCateTable.findFirst({
    where: eq(promptCateTable.slug, cate),
    with: {
      posts: {
        ...promptWith,
      }
    },
  })
}

export type PromptWithRelations = NonNullable<Awaited<ReturnType<typeof getPromptBySlug>>>

export const getThreePrompts = async (type: promptType) => {
  "use cache"
  cacheTag(cacheTags.prompts)
  return await db.query.promptsTable.findMany({
    limit: 3,
    orderBy: desc(promptsTable.updated_at),
    where: eq(promptsTable.type, type),
    ...promptWith,
  })
}

export const getTwoPrompts = async () => {
  "use cache"
  cacheTag(cacheTags.prompts)
  return await db.query.promptsTable.findMany({
    limit: 2,
    orderBy: desc(promptsTable.updated_at),
    where: eq(promptsTable.type, "prompt"),
    ...promptWith,
  })
}

// author

export const getAuthorById = async (id: string) => {
  "use cache"
  cacheTag(cacheTags.author)
  return await db.query.authorsTable.findFirst({
    where: eq(authorsTable.id, id)
  })
}




export const getAllCategories = async (type: promptType) => {
  return await db.query.promptCateTable.findMany({where: eq(promptCateTable.type, type)})
}

export const getAllRedirects = async () => {
  return await db.select().from(redirectsTable)
}

export const getAllNavItems = async ():Promise<navItem[]> => {
  "use cache"
  cacheTag(cacheTags.menuItems)
  const result = await db.query.promptCateTable.findMany()

  const result1 = result.filter(r => r.type === "prompt")
  const result2 = result.filter(r => r.type === "n8n")
  
  return [
    {
      label: "خانه",
      href: "/",
    },
    {
      label: "بلاگ",
      href: "Blog",
    },
    {
      label: "آموزش",
      href: "#",
      submenu: [
        {label: "پرامپت چیست؟", href: "what-is-prompt"},
        {label: "n8n چیست؟", href: "what-is-n8n"},
        {label: "آموزش نصب n8n", href: "download-install-n8n"},
      ]
    },
    {
      label: "پرامپت",
      href: "/Prompts",
      submenu: result1.map(r => ({label: r.name, href: `/Prompts/${r.slug}` }))
    },
    {
      label: "n8n",
      href: "/n8n",
      submenu: result2.map(r => ({label: r.name, href: `/n8n/${r.slug}` }))
    },
    {
      label: "ابزار",
      href: "/Tools",
      submenu: []
    },
  ]
}
