import BlogAsync from "@/components/pages/BlogAsync"
import { LoadingPage } from "@/components/parts/LoadingPage"
import { fetchSingleBlog } from "@/server/dataFetching"
import { env } from "@/server/env"
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
  const data = await fetchSingleBlog(slug)

  if (!data) return {}
 
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
    alternates: {
      canonical: `${env.BETTER_AUTH_URL}/Blog/${data.slug}`
    }
  }
}

export default page
