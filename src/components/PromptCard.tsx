"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Share2, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePromptCard } from "@/hooks/use-prompt-card"
import Link from "next/link"
import Image from "next/image"
import { PromptWithRelations } from "@/server/dataFetching"

interface PromptCardProps {
  prompt: PromptWithRelations
  className?: string
}

export function PromptCard({ prompt, className }: PromptCardProps) {
  const { parsedTags, handleShare } = usePromptCard(prompt)

  return (
    <>
      <Card className={cn("w-full max-w-md overflow-hidden transition-all p-0 hover:shadow-lg", className)} dir="rtl">
        <CardHeader className="p-0">
          <div className="relative">
            <Image
              src={prompt.picture || `/placeholder.svg?height=200&width=400&query=${encodeURIComponent(prompt.title)}`}
              alt={prompt.title}
              width={514}
              height={288}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 right-2">
              {prompt.isFree ? (
                <Badge variant="secondary" className="bg-green-500 text-white">
                  رایگان
                </Badge>
              ) : (
                <Badge variant="secondary" className="bg-orange-500 text-white">
                  پریمیوم
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-card-foreground line-clamp-2">{prompt.title}</h3>

            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{prompt.excerpt}</p>

            {parsedTags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {parsedTags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {parsedTags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{parsedTags.length - 3}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex items-center justify-between mt-auto">
          <div className=" w-full">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={handleShare} className="h-8 px-2">
                <Share2 className="h-4 w-4 ml-1" />
                اشتراک
              </Button>
            </div>
          </div>
          <Button className="cursor-pointer" asChild>
            <Link href={`/Prompts/${encodeURIComponent(prompt.category?.slug || "none")}/${encodeURIComponent(prompt.slug)}`}
              className="flex gap-2"
            >
              مشاهده
              <ArrowLeft/>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
