import PromptPageClient from "@/components/pages/PromptPageClient"
import { LoadingPage } from "@/components/parts/LoadingPage"
import { fetchSinglePrompt, fetchTwoPrompts } from "@/server/dataFetching"
import { env } from "@/server/env"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"

interface p {
  params: Promise<{slug: string}>
}
const page = (p:p) => {
  return (
    <Suspense fallback={<LoadingPage/>}>
      <Inner {...p}/>
    </Suspense>
  )
}

const Inner = async ({params}:p) => {
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
