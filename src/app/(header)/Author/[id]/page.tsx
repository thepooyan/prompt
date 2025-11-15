import { AuthorProfile } from "@/components/pages/AuthorPage"
import { getAuthorById } from "@/server/dataFetching"
import { notFound } from "next/navigation"

const page = async ({params}:{params: Promise<{id: string}>}) => {

  const {id} = await params
  const data = await getAuthorById(id)

  if (!data) return notFound()

  return (
    <AuthorProfile author={data}/>
  )
}

export default page
