import PromptPage from "@/components/pages/PromptPageClient"
import { fetchSinglePrompt, fetchTwoPrompts } from "@/server/dataFetching"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface p {
  params: Promise<{slug: string}>
}
const page = async ({params}:p) => {
  const {slug} = await params
  const [data, ] = await Promise.all([fetchSinglePrompt(slug), ])
  if (!data) return notFound()
  return (
    <>
      <PromptPage prompt={data} />
    </>
  )
}

 
export async function generateMetadata( { params }: p ): Promise<Metadata> {
  
  const { slug } = await params
  const data = await fetchSinglePrompt(slug)

  if (!data) return {}
 
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
    alternates: {
      canonical: `https://promptbazar.ir/Prompts/${data.slug}`
    }
  }
}

export default page
