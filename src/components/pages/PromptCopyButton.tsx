"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Check, Copy } from "lucide-react"

export function PromptCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button onClick={handleCopy} variant="outline" size="sm" className="gap-2 bg-transparent cursor-pointer">
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          کپی شد!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          کپی پرامپت
        </>
      )}
    </Button>
  )
}
