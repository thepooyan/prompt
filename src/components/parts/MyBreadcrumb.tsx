import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Fragment } from "react/jsx-runtime"

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
        {items.map((item, index) => <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
          </Fragment>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{lastItem?.title || ""}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default MyBreadcrumb

