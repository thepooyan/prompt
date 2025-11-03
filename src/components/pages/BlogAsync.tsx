import { notFound } from "next/navigation"
import remarkGfm from 'remark-gfm'
import Markdown from "react-markdown"
import { Badge } from "@/components/ui/badge"
import { fetchSingleBlog } from "@/server/dataFetching"
import Image from "next/image"
import MyBreadcrumb from "../parts/MyBreadcrumb"
import { blogBreadcrumb } from "../ts/breadcrumb"

interface p {
  params: Promise<{ slug: string }>
}
export default async function BlogAsync({ params, }: p) {
  const { slug } = await params
  const blog = await fetchSingleBlog(slug)

  if (!blog) {
    notFound()
  }

  const tagArray = blog.tags.split(",").map((tag) => tag.trim())

  return (
    <article className="min-h-screen  ">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-muted">
        {/* <Image src={blog.picture || "/placeholder.svg"} alt={blog.title} fill className="object-cover" priority /> */}
        <Image src={blog.picture || "/placeholder.svg"} alt={blog.title} className="object-cover m-auto"
          width={600} height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container max-w-4xl mx-auto px-4 -mt-32 relative z-10">
        <MyBreadcrumb items={blogBreadcrumb(blog.title, blog.slug)}/>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tagArray.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
          {blog.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">{blog.excerpt}</p>

        {/* Meta Information */}
        {/* <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime="2025-01-15">January 15, 2025</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>5 min read</span>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="  prose-zinc prose-lg max-w-none mb-16 text-justify">
          <Markdown remarkPlugins={[remarkGfm]}>
            {blog.description}
          </Markdown>
        </div>
      </div>
    </article>
  )
}
