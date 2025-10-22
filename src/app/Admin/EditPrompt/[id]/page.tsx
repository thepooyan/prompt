import PromptEditor from "@/components/pages/PromptEditor"
import { Loading } from "@/components/parts/Loading"
import { getPromptById } from "@/server/dataFetching"
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
  const data = await getPromptById(id)

  return (
    <>
      <PromptEditor edit={data}/>
    </>
  )
}

export default page