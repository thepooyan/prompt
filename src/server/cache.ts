import { revalidateTag as r, cacheTag as c } from 'next/cache'

export const cacheTags =  {
    blogs : "blogs",
    author : "author",
    singleBlog : "singleBlog",
    prompts : "prompts",
    singlePrompt: "singlePrompt",
    redirects: "redirects",
    menuItems: "menuItems",
}

export type cacheTagKey = typeof cacheTags[keyof typeof cacheTags]

export const cacheTag = async (tag: typeof cacheTags[keyof typeof cacheTags]) => {
    return c(tag)
}

export const revalidate = async (tag: typeof cacheTags[keyof typeof cacheTags]) => {
  return r(tag, "max")
}
