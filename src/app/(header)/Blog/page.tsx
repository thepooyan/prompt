import BlogCard from "@/components/parts/BlogCard";
import { fetchBlogs } from "@/server/dataFetching";
import { Metadata } from "next";

const page = async () => {

  let posts = await fetchBlogs()

  return (
    <div className="grid grid-cols-3 gap-10 max-w-7xl m-auto py-20 ">
      {posts.map(p => <BlogCard blog={p} key={p.id}/>)}
    </div>
  )
}
export const metadata: Metadata = {
  title: "وبلاگ",
};

export default page
