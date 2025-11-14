export const cacheTags =  {
    blogs : "blogs",
    singleBlog : "singleBlog",
    prompts : "prompts",
    n8n : "n8n",
    singlePrompt: "singlePrompt",
    redirects: "redirects",
    menuItems: "menuItems",
}

export type cacheTagKey = typeof cacheTags[keyof typeof cacheTags]
