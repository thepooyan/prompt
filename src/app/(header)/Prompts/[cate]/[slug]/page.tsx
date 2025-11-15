import PromptPage from "@/components/pages/PromptPageClient"
import { getPromptBySlug, getTwoPrompts } from "@/server/dataFetching"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface p {
  params: Promise<{slug: string}>
}
const page = async ({params}:p) => {
  const {slug} = await params
  const [data, related ] = await Promise.all([getPromptBySlug(slug), getTwoPrompts() ])
  if (!data) return notFound()
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
