"use server"
import { revalidateTag as r, cacheTag as c } from 'next/cache'
import { db } from "@/db"
import { authorsTable, Blog, blogsTable, promptCateTable, promptsTable, promptType, redirectsTable } from "@/db/schema"
import { desc, eq } from 'drizzle-orm'
import { cacheTags } from './cache'
import { navItem } from '@/components/layout/Burger'

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

export const getAuthorById = async (id: string) => {
  "use cache"
  cacheTag(cacheTags.author)
  return await db.query.authorsTable.findFirst({
    where: eq(authorsTable.id, id)
  })
}


export const getAllPrompts = async (type: promptType) => {
  "use cache"
  cacheTag(cacheTags.prompts)
  return await db.query.promptsTable.findMany({
    with: {category: true},
    where: eq(promptsTable.type, type),
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
    with: {category: true, author: true},
    where: eq(promptsTable.slug, decodeURIComponent(slug))
  })
} 
export type PromptWithRelations = NonNullable<Awaited<ReturnType<typeof fetchSinglePrompt>>>

export const fetchThreePrompts = async (type: promptType) => {
  "use cache"
  cacheTag(cacheTags.prompts)
  return await db.query.promptsTable.findMany({
    limit: 3,
    orderBy: desc(promptsTable.updated_at),
    where: eq(promptsTable.type, type),
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
