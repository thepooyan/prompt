import BlogAsync from "@/components/pages/BlogAsync"
import { fetchSingleBlog } from "@/server/dataFetching"
import { Metadata, ResolvingMetadata } from "next"
import { Suspense } from "react"

interface props {
  params: Promise<{slug: string}>
}
const page = (props:props) => {
  return (
    <Suspense>
      <BlogAsync {...props}/>
    </Suspense>
  )
}

export async function generateMetadata( { params }: props, parent: ResolvingMetadata): Promise<Metadata> {
  
  const { slug } = await params
  const data = await fetchSingleBlog(slug)

  if (!data) return {}
 
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