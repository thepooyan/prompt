
export const weblogDetailsUrl = (slug: string) => `/Blog/${encodeURIComponent(slug)}`

export const promptDetailsUrl = (slug: string) => `/Prompts/${encodeURIComponent(slug)}`

export const editPromptUrl = (id: number) => `/Admin/EditPrompt/${id}`