import PortraitPromptPage from "@/components/blog/Portrait"
import { getPromptBySlug } from "@/server/dataFetching";
import { Metadata } from "next";

const page = () => {
  return (
    <PortraitPromptPage/>
  )
}

export const generateMetadata = async (): Promise<Metadata> => { 
  const data = await getPromptBySlug("studio-portrait-prompt")

  if (!data) throw new Error("midjourney-prompt-guide not found")

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.seoKeywords,
  }
};

export default page
