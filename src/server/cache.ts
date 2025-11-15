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
