import { AuthorProfile } from "@/components/pages/AuthorPage"
import { getAuthorBySlug } from "@/server/dataFetching"
import { notFound } from "next/navigation"

const page = async ({params}:{params: Promise<{slug: string}>}) => {

  const {slug} = await params
  const data = await getAuthorBySlug(slug)

  if (!data) return notFound()

  return (
    <AuthorProfile author={data}/>
  )
}

export default page
