import LibraryClient from "@/components/LibraryClient"
import { getAllCategories, getPromptsByCategory } from "@/server/dataFetching"
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

export const generateStaticParams = async () => {
  const c = await getAllCategories("prompt")

  return c.map(c => ({
    cate: c.slug
  }))
}

export default page
