import LibraryClient from "@/components/LibraryClient"
import { getPromptByCategory } from "@/server/dataFetching"
import { notFound } from "next/navigation"

interface p {
  params: Promise<{cate:string}>
}
const page = async ({params}:p) => {

  const {cate} = await params

  const data = await getPromptByCategory(cate)

  if (!data) return notFound()

  return (
    <LibraryClient prompts={data.posts} category={data.name} type="n8n"/>
  )
}

export default page
