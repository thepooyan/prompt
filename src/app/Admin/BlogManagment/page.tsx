import BlogManagmentClient from "@/components/pages/BlogManagmentClient"
import { fetchBlogs } from "@/server/dataFetching"

const page = async () => {

  let data = await fetchBlogs()

  return (
    <BlogManagmentClient initialBlogs={data}/>
  )
}

export default page