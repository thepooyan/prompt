export const blogBreadcrumb = (title: string, slug: string) => [
  {title: "خانه", href:"/"},
  {title: "بلاگ", href:"/Blog"},
  {title: title, href:`/Blog/${slug}`},
]
export const allblogBreadcrumb = [
  {title: "خانه", href:"/"},
  {title: "بلاگ", href:"/Blog"},
]
