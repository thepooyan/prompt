export const cacheTags =  {
    blogs : "blogs",
    singleBlog : "singleBlog",
    prompts : "prompts",
    singlePrompt: "singlePrompt",
    redirects: "redirects",
}

export type cacheTagKey = typeof cacheTags[keyof typeof cacheTags]