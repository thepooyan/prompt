import BlogManagmentClient from "@/components/pages/BlogManagmentClient"
import { getAllBlogs } from "@/server/dataFetching"

const page = async () => {

  let data = await getAllBlogs()

  return (
    <BlogManagmentClient initialBlogs={data}/>
  )
}

export default page
