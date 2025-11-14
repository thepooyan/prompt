import PromptEditor from "@/components/pages/PromptEditor"
import { LoadingPage } from "@/components/parts/LoadingPage"
import { getAllCategories, getPromptById } from "@/server/dataFetching"
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
  const [data, cate] = await Promise.all([getPromptById(id), getAllCategories("prompt")])

  return (
    <>
      <PromptEditor edit={data} categories={cate}/>
    </>
  )
}

export default page
