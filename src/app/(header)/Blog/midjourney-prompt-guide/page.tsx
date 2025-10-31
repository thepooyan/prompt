import MidjournyBlog from "@/components/blog/Midjourny"
import { fetchSingleBlog } from "@/server/dataFetching";
import { Metadata } from "next"

const page = () => {
  return (
    <MidjournyBlog/>
  )
}

export const generateMetadata = async (): Promise<Metadata> => { 
  const data = await fetchSingleBlog("midjourney-prompt-guide")

  if (!data) throw new Error("midjourney-prompt-guide not found")

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
    alternates: {canonical: data.canonical}
  }
};

export default page
