import BlogManagmentClient from "@/components/pages/BlogManagmentClient"
import { fetchBlogs } from "@/server/dataFetching"

const page = async () => {

  let a = await fetchBlogs()
  console.log(a)

  return (
    <BlogManagmentClient initialBlogs={a}/>
  )
}

export default page