"use client"

import type React from "react"
import z from "zod"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X, Plus, Upload } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { updateBlog, insertBlog, } from "@/server/mutation"
import { Blog } from "@/db/schema"
import { useRouter } from "next/navigation"
import ArrayInput from "../ui/array-input"
import UploadMediaBtn from "../admin/UploadMediaBtn"

interface p {
  edit?: Blog
}
export default function BlogEditor({edit}:p) {
  const inputsSchema = z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.string(),
    picture: z.string(),
    excerpt: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    seoKeywords: z.array(z.string()),
  })
  type inputsType = z.infer<typeof inputsSchema>
  const empty:inputsType = {
    slug: "",
    title: "",
    description: "",
    tags: "",
    picture: "",
    excerpt: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: [],
  }
  const [formData, setFormData] = useState<inputsType>(edit ? inputsSchema.parse(edit) : empty)
  const [tagInput, setTagInput] = useState("")
  const [parsedTags, setParsedTags] = useState<string[]>(edit ? edit.tags.split(",") : [])
  const router = useRouter()

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addTag = () => {
    if (tagInput.trim() && !parsedTags.includes(tagInput.trim())) {
      const newTags = [...parsedTags, tagInput.trim()]
      setParsedTags(newTags)
      setFormData((prev) => ({ ...prev, tags: newTags.join(",") }))
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    const newTags = parsedTags.filter((tag) => tag !== tagToRemove)
    setParsedTags(newTags)
    setFormData((prev) => ({ ...prev, tags: newTags.join(",") }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title || !formData.description ) {
      toast.error("لطفاً تمام فیلدهای اجباری را پر کنید")
      return
    }

    if (edit !== undefined)
      submitEdit(edit.id)
    else
      submitNew()

    
  }

  const submitNew = async () => {
    const result = await insertBlog(formData)
    if (result.ok) {
      toast.success("بلاگ جدید با موفقیت ایجاد شد")
      router.push("/Admin/BlogManagment")
      router.refresh()
    } else {
      toast.error("خطا")
    }
  }
  const submitEdit = async (id: number) => {
    console.log(formData)
    const result = await updateBlog(id, formData)
    if (result.ok) {
      toast.success("ویرایش موفقیت آمیز بود")
      router.push("/Admin/BlogManagment")
      router.refresh()
    } else {
      console.log(result.error)
      toast.error("خطا")
    }
  }

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link href="/Prompts" className="text-sm text-muted-foreground hover:text-foreground">
            ← بازگشت به کتابخانه
          </Link>
          <h1 className="text-3xl font-bold mt-2">ایجاد بلاگ جدید</h1>
          <p className="text-muted-foreground mt-1">بلاگ جدید خود را ایجاد و به اشتراک بگذارید</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>اطلاعات بلاگ</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">عنوان *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="عنوان بلاگ را وارد کنید"
                  className="text-right"
                />
              </div>

              {/* Slug */}
              <div className="space-y-2">
                <Label>اسلاگ *</Label>
                <Input
                  value={formData.slug}
                  onChange={(e) => handleInputChange("slug", e.target.value)}
                  placeholder="اسلاگ بلاگ را وارد کنید"
                  className="text-right"
                />
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <Label>خلاصه *</Label>
                <Textarea
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange("excerpt", e.target.value)}
                  placeholder="توضیح مختصری از بلاگ ارائه دهید"
                  className="text-right min-h-[100px]"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">مطلب *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="مطلب کامل بلاگ"
                  className="text-right min-h-[100px]"
                />
              </div>


              {/* Tags */}
              <div className="space-y-2">
                <Label>برچسب‌ها</Label>
                <div className="flex gap-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="برچسب جدید"
                    className="text-right"
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                {parsedTags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {parsedTags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1" onClick={() => removeTag(tag)}>
                        {tag}
                        <X className="h-3 w-3 cursor-pointer hover:text-destructive" />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Picture URL */}
              <div className="space-y-2">
                <Label htmlFor="picture">تصویر (URL)</Label>
                <div className="flex gap-2">
                  <Input
                    id="picture"
                    value={formData.picture}
                    onChange={(e) => handleInputChange("picture", e.target.value)}
                    placeholder="آدرس تصویر را وارد کنید"
                    className="text-right"
                  />
                  <UploadMediaBtn onUploaded={url => setFormData(prev => ({...prev, picture: url}))}>
                    <Upload className="h-4 w-4" />
                  </UploadMediaBtn>
                </div>
                {formData.picture && (
                  <div className="mt-2">
                    <img
                      src={formData.picture || "/placeholder.svg"}
                      alt="پیش‌نمایش"
                      className="w-full h-32 object-cover rounded-md"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Seo title */}
              <div className="space-y-2">
                <Label>Seo title</Label>
                <Input
                  value={formData.seoTitle}
                  onChange={(e) => handleInputChange("seoTitle", e.target.value)}
                  className="text-right"
                />
              </div>
              {/* Seo des */}
              <div className="space-y-2">
                <Label>Seo Description</Label>
                <Input
                  value={formData.seoDescription}
                  onChange={(e) => handleInputChange("seoDescription", e.target.value)}
                  className="text-right"
                />
              </div>
              {/* Seo title */}
              <div className="space-y-2">
                <Label>Seo keywords</Label>
                <ArrayInput
                  array={formData.seoKeywords}
                  onChange={val => setFormData(prev => ({...prev, seoKeywords: val})) }
                />
              </div>


              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  {!edit ? "ایجاد بلاگ" : "ویرایش بلاگ"}
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/Admin/BlogManagment">انصراف</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
