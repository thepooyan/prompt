import { fetchSingleBlog } from "@/server/dataFetching"
import { Suspense } from "react"

interface props {
  params: Promise<{slug: string}>
}
const page = (props:props) => {
  return (
    <Suspense>
      <Inner {...props}/>
    </Suspense>
  )
}

const Inner = async ({params}:props) => {
  const {slug} = await params
  const data = await fetchSingleBlog(slug)
  return data?.title
}

export default page
