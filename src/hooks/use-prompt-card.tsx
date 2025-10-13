"use client"

import { toast } from "sonner"
import { useState } from "react"
import type { Prompt } from "@/db/schema"

export function usePromptCard(prompt: Prompt) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.description)
      toast.success("کپی شد!")
    } catch (err) {
      toast.error("امکان کپی کردن وجود ندارد")
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: prompt.title,
          text: prompt.description,
          url: `/prompts/${prompt.slug}`,
        })
      } catch (err) {
        // User cancelled sharing
      }
    } else {
      // Fallback to copying URL
      try {
        await navigator.clipboard.writeText(`${window.location.origin}/prompts/${prompt.slug}`)
        toast.success("کپی شد!")
      } catch (err) {
        toast.error("امکان کپی کردن وجود ندارد")
      }
    }
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1))
    if (isLiked)
        toast.success("پرامپت به لیست علاقه‌مندی‌ها اضافه شد")
    else 
        toast.success("پرامپت از لیست علاقه‌مندی‌ها حذف شد" )
  }

  const parsedTags = prompt.tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)

  return {
    isLiked,
    likeCount,
    parsedTags,
    handleCopy,
    handleShare,
    handleLike,
  }
}
