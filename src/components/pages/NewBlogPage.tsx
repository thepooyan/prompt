"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X, Plus } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import UploadBtn from "../parts/UploadBtn"
import { editBlog, uploadNewBlog, uploadNewPrompt } from "@/server/actions"
import { Blog, NewBlog } from "@/db/schema"
import { useRouter } from "next/navigation"

interface p {
  edit?: Blog
}
export default function NewBlogPage({edit}:p) {
  const empty = {
    slug: "",
    title: "",
    description: "",
    tags: "",
    picture: "",
    excerpt: "",
    canonical: null
  }
  const [formData, setFormData] = useState(edit ? {...edit} : {...empty})
  const [tagInput, setTagInput] = useState("")
  const [parsedTags, setParsedTags] = useState<string[]>([])
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
      submitEdit(edit)
    else
      submitNew()

    
  }

  const submitNew = async () => {
    let result = await uploadNewBlog(formData)
    if (result.ok) {
      toast.success("بلاگ جدید با موفقیت ایجاد شد")
      router.push("/Admin/BlogManagment")
      router.refresh()
    } else {
      toast.error("خطا")
    }
  }
  const submitEdit = async (edit: Blog) => {
    let result = await editBlog({...formData, id: edit.id})
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
    <div className="min-h-screen bg-background p-4" dir="rtl">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link href="/library" className="text-sm text-muted-foreground hover:text-foreground">
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

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">توضیحات *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="توضیح مختصری از بلاگ ارائه دهید"
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
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                {parsedTags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {parsedTags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <X className="h-3 w-3 cursor-pointer hover:text-destructive" onClick={() => removeTag(tag)} />
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
                  <UploadBtn onUploaded={url => setFormData(prev => ({...prev, picture: url}))}/>
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

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  ایجاد بلاگ
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/library">انصراف</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
