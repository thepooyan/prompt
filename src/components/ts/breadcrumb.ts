import { PromptWithRelations } from "@/server/dataFetching"

type returnType = {title: string, href: string}[]

export const blogBreadcrumb = (title: string) => [
  {title: "خانه", href:"/"},
  {title: "بلاگ", href:"/Blog"},
  {title: title, href:""},
]
export const allblogBreadcrumb = [
  {title: "خانه", href:"/"},
  {title: "بلاگ", href:"/Blog"},
]
export const promptBreadcrumb = (pr: PromptWithRelations):returnType => [
  {title: "خانه", href:"/"},
  {title: "پرامپت", href:"/Prompts"},
  {title: pr.category?.name || "", href:`/Prompts/${pr.category?.slug}`},
  {title: pr.title, href:""},
]
