import MidjournyBlog from "@/components/blog/Midjourny"
import { getBlogBySlug } from "@/server/dataFetching";
import { env } from "@/server/env";
import { Metadata } from "next"

const page = () => {
  return (
    <MidjournyBlog/>
  )
}

export const generateMetadata = async (): Promise<Metadata> => { 
  const data = await getBlogBySlug("midjourney-prompt-guide")

  if (!data) throw new Error("midjourney-prompt-guide not found")

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
  }
};

export default page
