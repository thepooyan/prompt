"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X } from "lucide-react"
import { PromptCard } from "@/components/PromptCard"
import { PromptWithRelations } from "@/server/dataFetching"
import { getEntityName } from "@/lib/utils"
import { promptType } from "@/db/schema"

interface p {
  prompts: PromptWithRelations[]
  category?: string
  type: promptType
}
export default function LibraryClient({prompts, category, type}:p) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFreeOnly, setShowFreeOnly] = useState(false)
  const name = getEntityName(type)

  // Extract all unique tags from prompts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    prompts.forEach((prompt) => {
      const tags = prompt.tags.split(",").map((tag) => tag.trim())
      tags.forEach((tag) => tagSet.add(tag))
    })
    return Array.from(tagSet)
  }, [prompts])

  // Filter prompts based on search query, selected tags, and free filter
  const filteredPrompts = useMemo(() => {
    return prompts.filter((prompt) => {
      // Search in title and description
      const searchMatch =
        searchQuery === "" ||
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Check if prompt has any of the selected tags
      const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.some((selectedTag) =>
          prompt.tags
            .split(",")
            .map((tag) => tag.trim())
            .includes(selectedTag),
        )

      // Check free filter
      const freeMatch = !showFreeOnly || prompt.isFree

      return searchMatch && tagMatch && freeMatch
    })
  }, [searchQuery, selectedTags, showFreeOnly, prompts])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTags([])
    setShowFreeOnly(false)
  }

  return (
    <div className="container mx-auto px-4 py-8" dir="rtl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          کتابخانه {name}‌ها {category}
        </h1>
        <p className="text-muted-foreground">مجموعه‌ای از بهترین {name}‌ها برای نیازهای مختلف شما</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="جستجو در عنوان و توضیحات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">فیلترها:</span>
          </div>

          <Button
            variant={showFreeOnly ? "default" : "outline"}
            size="sm"
            onClick={() => setShowFreeOnly(!showFreeOnly)}
          >
            فقط رایگان
          </Button>

          {selectedTags.length > 0 || searchQuery || showFreeOnly ? (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 ml-1" />
              پاک کردن فیلترها
            </Button>
          ) : null}
        </div>

        {/* Tags Filter */}
        <div className="space-y-2">
          <span className="text-sm font-medium text-muted-foreground">فیلتر بر اساس برچسب:</span>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/80 transition-colors"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          {filteredPrompts.length} {name} از {prompts.length} پرامپت یافت شد
        </p>
      </div>

      {/* Prompts Grid */}
      {filteredPrompts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg mb-4">هیچ {name}ی یافت نشد</p>
          <p className="text-sm text-muted-foreground mb-6">
            لطفاً فیلترهای خود را تغییر دهید یا جستجوی جدیدی انجام دهید
          </p>
          <Button onClick={clearFilters}>پاک کردن فیلترها</Button>
        </div>
      )}
    </div>
  )
}
