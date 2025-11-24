import BlogPageServer from "@/components/pages/BlogAsync"
import { getAllBlogs, getBlogBySlug } from "@/server/dataFetching"
import { Metadata } from "next"

interface props {
  params: Promise<{slug: string}>
}
const page = async (props:props) => {
  return (
    <BlogPageServer {...props}/>
  )
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs()
 
  return blogs.map(b => ({
    slug: b.slug,
  }))
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
