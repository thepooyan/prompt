import { db } from "@/db"
import { blogsTable } from "@/db/schema"
import "server-only"
import LatestBlogs from "./LatestBlogs"

const LatestBlogsFetcher = async () => {
    let data = await db.select().from(blogsTable).limit(5)
  return (
    <LatestBlogs blogs={data}/>
  )
}

export default LatestBlogsFetcher