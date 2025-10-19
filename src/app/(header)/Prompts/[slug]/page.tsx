import PromptPageClient from "@/components/pages/PromptPageClient"
import { fetchSinglePrompt } from "@/server/dataFetching"
import { notFound } from "next/navigation"
import { Suspense } from "react"

interface p {
  params: Promise<{slug: string}>
}
const page = (p:p) => {
  return (
    <Suspense>
      <Inner {...p}/>
    </Suspense>
  )
}

const Inner = async ({params}:p) => {
  const {slug} = await params
  const data = await fetchSinglePrompt(slug)
  if (!data) return notFound()
  return (
    <>
      <PromptPageClient prompt={data}/>
    </>
  )
}

export default page