export const cacheTags =  {
    blogs : "blogs",
    singleBlog : "singleBlog",
    prompts : "prompts",
    singlePrompt: "singlePrompt",
    threePrompts: "threePrompts",
    fiveBlogs: "fiveBlogs"
}

export type cacheTagKey = typeof cacheTags[keyof typeof cacheTags]