"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Share2, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Prompt } from "@/db/schema"
import { usePromptCard } from "@/hooks/use-prompt-card"

interface PromptCardProps {
  prompt: Prompt
  className?: string
}

export function PromptCard({ prompt, className }: PromptCardProps) {
  const { isLiked, likeCount, parsedTags, handleCopy, handleShare, handleLike } = usePromptCard(prompt)

  return (
    <>
      <Card className={cn("w-full max-w-md overflow-hidden transition-all p-0 hover:shadow-lg", className)} dir="rtl">
        <CardHeader className="p-0">
          <div className="relative">
            <img
              src={prompt.picture || `/placeholder.svg?height=200&width=400&query=${encodeURIComponent(prompt.title)}`}
              alt={prompt.title}
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

            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{prompt.description}</p>

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

        <CardFooter className="p-4 pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 px-2">
                <Copy className="h-4 w-4 ml-1" />
                کپی
              </Button>

              <Button variant="ghost" size="sm" onClick={handleShare} className="h-8 px-2">
                <Share2 className="h-4 w-4 ml-1" />
                اشتراک
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={cn("h-8 px-2 transition-colors", isLiked && "text-red-500 hover:text-red-600")}
            >
              <Heart className={cn("h-4 w-4 ml-1", isLiked && "fill-current")} />
              <span className="text-xs">{likeCount}</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}
