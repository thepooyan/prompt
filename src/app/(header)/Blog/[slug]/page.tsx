import BlogAsync from "@/components/pages/BlogAsync"
import { LoadingPage } from "@/components/parts/LoadingPage"
import { getBlogBySlug } from "@/server/dataFetching"
import { Metadata } from "next"
import { Suspense } from "react"

interface props {
  params: Promise<{slug: string}>
}
const page = (props:props) => {
  return (
    <Suspense fallback={<LoadingPage/>}>
      <BlogAsync {...props}/>
    </Suspense>
  )
}

export async function generateMetadata( { params }: props): Promise<Metadata> {
  
  const { slug } = await params
  const data = await getBlogBySlug(slug)

  if (!data) return {}
 
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
  }
}

export default page
