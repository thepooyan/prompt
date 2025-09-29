import { Blog } from "@/db/schema"

interface p {
    blog: Blog
}
const BlogCard = ({blog}:p) => {
  return (
    <a className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg rtl block h-90 rtl" href="#">
        <img
            src={blog.picture}
            alt={blog.title}
            className="w-full h-48 object-cover"
        />
        <div className="p-6">
            <h5 className="text-lg font-bold text-white mb-2">
                {blog.title}
            </h5>
            <p className="text-gray-400">
                {blog.excerpt}
            </p>
        </div>
    </a>
  )
}

export default BlogCard