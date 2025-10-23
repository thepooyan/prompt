"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { X, Plus } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import UploadBtn from "../parts/UploadBtn"
import {  updatePrompt,  insertPrompt } from "@/server/mutation"
import { Prompt } from "@/db/schema"
import { useRouter } from "next/navigation"
import ArrayInput from "../ui/array-input"

interface p {
  edit?: Prompt
}
export default function PromptEditor({edit}:p) {
  const empty = {
    title: "",
    description: "",
    slug: "",
    prompt: "",
    tags: "",
    picture: "",
    isFree: true,
    seoTitle: "",
    seoDescription: "",
    seoKeywords: [],
    canonical: ""
  }
  const router = useRouter()
  const [formData, setFormData] = useState<Prompt>(edit ? edit : {...empty, id: 0});
  const [tagInput, setTagInput] = useState("");
  
  const [parsedTags, setParsedTags] = useState<string[]>([])

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

    if (!formData.title || !formData.description || !formData.prompt) {
      toast.error("لطفاً تمام فیلدهای اجباری را پر کنید")
      return
    }

    if (edit) submitEdit(edit)
      else submitNew()

  }

  const submitNew = async () => {
    const {id , ...rest} = formData
    let result = await insertPrompt(rest)
    if (result.ok) {
      toast.success("پرامپت جدید با موفقیت ایجاد شد")
      router.push("/Admin/PromptManagment")
      router.refresh()
    } else {
      toast.error("خطا")
    }
  }
  const submitEdit = async (edit: Prompt) => {
    let result = await updatePrompt({...formData, id: edit.id})
    if (result.ok) {
      toast.success("ویرایش با موفقیت ایجاد شد")
      router.push("/Admin/PromptManagment")
      router.refresh()
    } else {
      toast.error("خطا")
      console.log(result.error)
    }
  }

  return (
    <div className="min-h-screen bg-background p-4" dir="rtl">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mt-2">{!edit ? "ایجاد پرامپت جدید" : "ویرایش پرامپت"}</h1>
        </div>

        <Card>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">عنوان *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="عنوان پرامپت را وارد کنید"
                  className="text-right"
                />
              </div>

              {/* Slug */}
              <div className="space-y-2">
                <Label htmlFor="title">اسلاگ *</Label>
                <Input
                  value={formData.slug}
                  onChange={(e) => handleInputChange("slug", e.target.value)}
                  placeholder="اسلاگ پرامپت را وارد کنید"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">توضیحات *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="توضیح مختصری از پرامپت ارائه دهید"
                  className="text-right min-h-[100px]"
                />
              </div>

              {/* Prompt Content */}
              <div className="space-y-2">
                <Label htmlFor="prompt">محتوای پرامپت *</Label>
                <Textarea
                  id="prompt"
                  value={formData.prompt}
                  onChange={(e) => handleInputChange("prompt", e.target.value)}
                  placeholder="متن کامل پرامپت را وارد کنید"
                  className="text-right min-h-[150px] font-mono"
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

              {/* Free/Premium Toggle */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>نوع پرامپت</Label>
                  <p className="text-sm text-muted-foreground">
                    {formData.isFree ? "این پرامپت رایگان است" : "این پرامپت پریمیوم است"}
                  </p>
                </div>
                <div className="flex items-center gap-2 ltr">
                  <span className="text-sm">پریمیوم</span>
                  <Switch
                    checked={formData.isFree}
                    onCheckedChange={(checked) => handleInputChange("isFree", checked)}
                  />
                  <span className="text-sm">رایگان</span>
                </div>
              </div>

              {/* Canonical */}
              <div className="space-y-2">
                <Label htmlFor="title">Canonical</Label>
                <Input
                  value={formData.canonical}
                  onChange={(e) => handleInputChange("canonical", e.target.value)}
                />
              </div>
              {/* Seo Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Seo title</Label>
                <Input
                  value={formData.seoTitle}
                  onChange={(e) => handleInputChange("seoTitle", e.target.value)}
                />
              </div>
              {/* Seo desc */}
              <div className="space-y-2">
                <Label htmlFor="title">Seo description</Label>
                <Input
                  value={formData.seoDescription}
                  onChange={(e) => handleInputChange("seoDescription", e.target.value)}
                />
              </div>
              {/* Seo Tags */}
              <div className="space-y-2">
                <Label>Seo Keywords</Label>
                <ArrayInput
                  array={formData.seoKeywords}
                  onChange={val => setFormData(prev => ({...prev, seoKeywords: val }))}
                />
              </div>


              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  {edit ? "ویرایش پرامپت" : "ایجاد پرامپت"}
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
