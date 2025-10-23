import PromptPageClient from "@/components/pages/PromptPageClient"
import { fetchSinglePrompt } from "@/server/dataFetching"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"

interface p {
  params: Promise<{slug: string}>
}
const page = (p:p) => {
  return (
    <Suspense>
      <Inner {...p}/>
    </Suspense>
  )
}

const Inner = async ({params}:p) => {
  const {slug} = await params
  const data = await fetchSinglePrompt(slug)
  if (!data) return notFound()
  return (
    <>
      <PromptPageClient prompt={data}/>
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
      canonical: data.canonical
    }
  }
}

export default page