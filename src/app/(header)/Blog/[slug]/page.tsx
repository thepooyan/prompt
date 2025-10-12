import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import { fetchSinglePost } from "@/server/dataFetching"
// import Image from "next/image"

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = await fetchSinglePost(slug)

  if (!blog) {
    notFound()
  }

  const tagArray = blog.tags.split(",").map((tag) => tag.trim())

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-muted">
        {/* <Image src={blog.picture || "/placeholder.svg"} alt={blog.title} fill className="object-cover" priority /> */}
        <img src={blog.picture || "/placeholder.svg"} alt={blog.title} className="object-cover m-auto"/>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container max-w-4xl mx-auto px-4 -mt-32 relative z-10">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tagArray.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
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
        <div className="prose prose-lg max-w-none mb-16">
          {blog.description}
        </div>
      </div>
    </article>
  )
}
