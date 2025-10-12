"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Prompt } from "@/db/schema"
import { useState } from "react"
import { Button } from "../ui/button"
import { Check, Copy } from "lucide-react"

interface p { prompt: Prompt }
export default function PromptPageClient({ prompt }:p ) {

  const tagList = prompt.tags.split(",").map((tag) => tag.trim())

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700">
        <Image
          src={prompt.picture || "/placeholder.svg"}
          alt={prompt.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-4xl flex-col justify-end px-4 pb-12">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {tagList.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
              >
                {tag}
              </Badge>
            ))}
            <Badge
              variant={prompt.isFree ? "default" : "secondary"}
              className={
                prompt.isFree
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-amber-500 text-white hover:bg-amber-600"
              }
            >
              {prompt.isFree ? "Free" : "Premium"}
            </Badge>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {prompt.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Description */}
        <div className="mb-12">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{prompt.description}</p>
        </div>

        {/* Prompt Display */}
        <div className="rounded-lg border bg-card">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-xl font-semibold">Prompt</h2>
            <CopyButton text={prompt.prompt} />
          </div>
          <div className="p-6">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">{prompt.prompt}</pre>
          </div>
        </div>

        {/* Usage Tips */}
        <div className="mt-12 rounded-lg border bg-muted/50 p-6">
          <h3 className="mb-3 text-lg font-semibold">How to Use</h3>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Copy the prompt using the button above and paste it into your AI assistant</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Fill in the bracketed sections with your specific information</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Adjust the tone and parameters to match your needs</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Experiment with different variations to get the best results</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button onClick={handleCopy} variant="outline" size="sm" className="gap-2 bg-transparent">
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy Prompt
        </>
      )}
    </Button>
  )
}