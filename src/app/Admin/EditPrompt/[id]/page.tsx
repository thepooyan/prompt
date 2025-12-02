import PromptEditor from "@/components/pages/PromptEditor"
import { LoadingPage } from "@/components/parts/LoadingPage"
import { getAllAuthors, getAllCategories, getPromptById } from "@/server/dataFetching"
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
  const data = await getPromptById(id)
  const [cate, auth] = await Promise.all([getAllCategories(data.type), getAllAuthors()])

  return (
    <>
      <PromptEditor edit={data} categories={cate} type={data.type} authors={auth}/>
    </>
  )
}

export default page
