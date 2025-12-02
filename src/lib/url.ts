import { capitalize } from "./utils"
import { PromptWithRelations } from "@/server/dataFetching"

export const weblogDetailsUrl = (slug: string) => `/Blog/${encodeURIComponent(slug)}`

export const promptDetailsUrl = (pr: PromptWithRelations) => `/${capitalize(pr.type)}/${pr.category.slug}/${encodeURIComponent(pr.slug)}`

export const editPromptUrl = (id: number) => `/Admin/EditPrompt/${id}`
