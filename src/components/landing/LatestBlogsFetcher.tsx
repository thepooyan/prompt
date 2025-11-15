import "server-only"
import LatestBlogs from "./LatestBlogs"
import { getFiveBlogs } from "@/server/dataFetching"

const LatestBlogsFetcher = async () => {
    let data = await getFiveBlogs()
  return (
    <LatestBlogs blogs={data}/>
  )
}

export default LatestBlogsFetcher
