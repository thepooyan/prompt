import BlogCard from "@/components/parts/BlogCard";
import MyBreadcrumb from "@/components/parts/MyBreadcrumb";
import { allblogBreadcrumb } from "@/components/ts/breadcrumb";
import { getAllBlogs } from "@/server/dataFetching";
import { Metadata } from "next";

const page = async () => {

  const posts = await getAllBlogs()

  return (
    <div className="max-w-7xl m-auto py-20 px-5">
      <MyBreadcrumb items={allblogBreadcrumb}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-max m-auto  ">
        {posts.map(p => <BlogCard blog={p} key={p.id}/>)}
      </div>
    </div>
  )
}
export const metadata: Metadata = {
  title: "وبلاگ",
};

export default page
