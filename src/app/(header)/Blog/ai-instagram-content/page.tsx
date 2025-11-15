import InstaBlog from "@/components/blog/Insta";
import { fetchSingleBlog } from "@/server/dataFetching";
import { env } from "@/server/env";
import { Metadata } from "next"

const page = () => {
  return (
    <InstaBlog/>
  )
}

export const generateMetadata = async (): Promise<Metadata> => { 
  const data = await fetchSingleBlog("ai-instagram-content")

  if (!data) throw new Error("ai-instagram-content not found")

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
  }
};

export default page
