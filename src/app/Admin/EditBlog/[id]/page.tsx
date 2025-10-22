import NewBlogPage from "@/components/pages/NewBlogPage"
import { Loading } from "@/components/parts/Loading"
import { getBlogById } from "@/server/dataFetching"
import { Suspense } from "react"

interface p {
  params: Promise<{id: number}>
}
const page = (props:p) => {
  return (
    <Suspense fallback={<Loading/>}>
      <InnerPage {...props}/>
    </Suspense>
  )
}
const InnerPage = async ({params}:p) => {
  const {id} = await params
  const data = await getBlogById(id)

  return (
    <>
      <NewBlogPage edit={data}/>
    </>
  )
}

export default page