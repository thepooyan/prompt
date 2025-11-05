import PromptPageClient from "@/components/pages/PromptPageClient"
import { fetchSinglePrompt, fetchTwoPrompts } from "@/server/dataFetching"
import { env } from "@/server/env"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface p {
  params: Promise<{slug: string}>
}
const page = async ({params}:p) => {
  const {slug} = await params
  const [data, related] = await Promise.all([fetchSinglePrompt(slug), fetchTwoPrompts()])
  if (!data) return notFound()
  return (
    <>
      <PromptPageClient prompt={data} relatedPrompts={related}/>
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
      canonical: `${env.BETTER_AUTH_URL}/Prompts/${data.slug}`
    }
  }
}

export default page
