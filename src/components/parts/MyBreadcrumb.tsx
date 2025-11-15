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
  const last = items.length - 1
  const start = items.slice(0, last)
  const finish = items.at(last)
  return (
    <Breadcrumb className="mb-5">
      <BreadcrumbList>
        {start.map((item, index) => <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
          </Fragment>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{finish?.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default MyBreadcrumb

