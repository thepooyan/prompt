import { notFound } from "next/navigation"
import { Prompt, promptsTable } from "@/db/schema"
import { db } from "@/db"
import { eq } from "drizzle-orm"
import PromptPageClient from "@/components/pages/PromptPage"

async function getPrompt(slug: string): Promise<Prompt | undefined> {
  // Replace with your actual data fetching logic
  const [p] =  await db.select().from(promptsTable).where(eq(promptsTable.slug, decodeURIComponent(slug))).limit(1)
  return p
}

export default async function PromptPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const prompt = await getPrompt(slug)

  if (!prompt) {
    notFound()
  }

  return <PromptPageClient prompt={prompt}/>
}
