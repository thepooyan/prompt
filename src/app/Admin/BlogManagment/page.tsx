import BlogManagmentClient from "@/components/pages/BlogManagmentClient"
import { fetchBlogs } from "@/server/dataFetching"

const page = async () => {

  let a = await fetchBlogs()

  return (
    <BlogManagmentClient initialBlogs={a}/>
  )
}

export default page