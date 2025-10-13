import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Blog } from "@/db/schema"

interface BlogCardProps {
  blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
  const tags = blog.tags.split(",").map((tag) => tag.trim())

  return (
    <Link href={`/Blog/`} className="block group rtl"> 
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg ">
        <CardHeader className="p-0">
          <div className="relative w-full aspect-video overflow-hidden">
            <img
              src={blog.picture || "/placeholder.svg"}
              alt={blog.title}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="  text-2xl font-bold text-card-foreground mb-3 line-clamp-2 text-balance">
            {blog.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed line-clamp-3">{blog.excerpt}</p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 text-sm font-medium bg-accent text-accent-foreground rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
