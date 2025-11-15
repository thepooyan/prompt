import LibraryClient from "@/components/LibraryClient"
import { db } from "@/db"
import { promptCateTable } from "@/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

interface p {
  params: Promise<{cate:string}>
}
const page = async ({params}:p) => {

  const {cate} = await params

  const data = await db.query.promptCateTable.findFirst({
    where: eq(promptCateTable.slug, cate),
    with: {posts: true}
  })

  if (!data) return notFound()

  const posts = data.posts.map(p => ({...p, category: {slug: cate, name: data.name, id: data.id, type: "prompt" as const}}))

  return (
    <LibraryClient prompts={posts} category={data.name} type="prompt"/>
  )
}

export default page
