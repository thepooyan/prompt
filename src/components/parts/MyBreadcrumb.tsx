import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface p {
  items: {
    title: string,
    href: string
  }[]

}
const MyBreadcrumb = ({items}:p) => {
  const lastItem = items.pop()
  return (
    <Breadcrumb className="mb-5">
      <BreadcrumbList>
        {items.map((item, index) => <BreadcrumbItem key={index}>
          <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
          <BreadcrumbSeparator/>
        </BreadcrumbItem>)}
        <BreadcrumbItem>
          <BreadcrumbPage>{lastItem?.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default MyBreadcrumb

