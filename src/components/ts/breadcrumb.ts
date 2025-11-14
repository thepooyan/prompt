import { capitalize, getEntityName } from "@/lib/utils"
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
  {title: getEntityName(pr.type), href: `/${capitalize(pr.type)}`},
  {title: pr.category.name , href:`/${capitalize(pr.type)}/${pr.category.slug}`},
  {title: pr.title, href:""},
]
