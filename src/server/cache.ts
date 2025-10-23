export const cacheTags =  {
    blogs : "blogs",
    singleBlog : "singleBlog",
    prompts : "prompts",
    singlePrompt: "singlePrompt",
}

export type cacheTagKey = typeof cacheTags[keyof typeof cacheTags]