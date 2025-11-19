"use cache"
import BlogPageServer from "@/components/pages/BlogAsync"
import { getBlogBySlug } from "@/server/dataFetching"
import { Metadata } from "next"

interface props {
  params: Promise<{slug: string}>
}
const page = async (props:props) => {
  return (
    <BlogPageServer {...props}/>
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
