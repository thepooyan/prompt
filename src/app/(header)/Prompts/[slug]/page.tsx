import { notFound } from "next/navigation"
import PromptPageClient from "@/components/pages/PromptPageClient"
import { fetchSinglePrompt } from "@/server/dataFetching"

export default async function PromptPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const prompt = await fetchSinglePrompt(slug)

  if (!prompt) {
    notFound()
  }

  return <PromptPageClient prompt={prompt}/>
}
