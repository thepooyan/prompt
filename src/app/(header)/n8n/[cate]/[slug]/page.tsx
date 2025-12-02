import PromptPage from "@/components/pages/PromptPageClient"
import { getPromptBySlug, getTwoPrompts } from "@/server/dataFetching"
import { Metadata } from "next"
import { notFound, redirect } from "next/navigation"

interface p {
  params: Promise<{slug: string, cate: string}>
}
const page = async ({params}:p) => {
  const {slug, cate} = await params
  const [data, related] = await Promise.all([getPromptBySlug(slug) , getTwoPrompts()])
  if (!data) return notFound()
  if (data.category.slug !== cate)
    throw redirect(`/n8n/${data.category.slug}/${slug}`)
  return (
    <>
      <PromptPage prompt={data} related={related}/>
    </>
  )
}

 
export async function generateMetadata( { params }: p ): Promise<Metadata> {
  
  const { slug } = await params
  const data = await getPromptBySlug(slug)

  if (!data) return {}

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
  }
}

export default page
