import LibraryClient from "@/components/LibraryClient"
import { getPromptsByCategory } from "@/server/dataFetching"
import { notFound } from "next/navigation"

interface p {
  params: Promise<{cate:string}>
}
const page = async ({params}:p) => {

  const {cate} = await params

  const data = await getPromptsByCategory(cate)

  if (!data) return notFound()


  return (
    <LibraryClient prompts={data.posts} category={data.name} type="prompt"/>
  )
}

export default page
