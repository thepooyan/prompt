import "server-only"
import LatestBlogs from "./LatestBlogs"
import { fetchFiveBlogs } from "@/server/dataFetching"

const LatestBlogsFetcher = async () => {
    let data = await fetchFiveBlogs()
  return (
    <LatestBlogs blogs={data}/>
  )
}

export default LatestBlogsFetcher