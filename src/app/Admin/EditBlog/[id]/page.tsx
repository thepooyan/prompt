import BlogEditor from "@/components/pages/BlogEditor"
import { LoadingPage } from "@/components/parts/LoadingPage"
import { getBlogById } from "@/server/dataFetching"
import { Suspense } from "react"

interface p {
  params: Promise<{id: number}>
}
const page = (props:p) => {
  return (
    <Suspense fallback={<LoadingPage/>}>
      <InnerPage {...props}/>
    </Suspense>
  )
}
const InnerPage = async ({params}:p) => {
  const {id} = await params
  const data = await getBlogById(id)

  return (
    <>
      <BlogEditor edit={data}/>
    </>
  )
}

export default page
