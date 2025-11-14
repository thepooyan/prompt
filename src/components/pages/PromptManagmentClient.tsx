"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Prompt, promptType } from "@/db/schema";
import { Suspense, useState } from "react";
import { limitChar } from "@/lib/utils";
import { callModal } from "@/components/layout/Modal";
import { Calendar, Edit, Eye, Plus, Trash2 } from "lucide-react";
import { fetchPrompts } from "@/server/dataFetching";
import { deletePrompt } from "@/server/mutation";
import Link from "@/components/ui/link";
import { editPromptUrl, promptDetailsUrl } from "@/lib/url";
import { toast } from "sonner";
import { LoadingPage } from "../parts/LoadingPage";

interface p {
  initialBlogs: Prompt[],
  type: promptType
}
export default function PromptManagmentClient({initialBlogs, type}:p) {
  const [posts, setPosts] = useState<Prompt[]>(initialBlogs)

  const name = "پرامپت"
  const handleDelete = (post: Prompt) => {
    callModal.prompt(`"${limitChar(post.title, 40)}" حذف شود؟`)
    .yes(async () => {
        const {ok} = await deletePrompt(post.id)
        if (ok) {
          toast.success("با موفقیت حذف شد!")
          const blogs = await fetchPrompts()
          setPosts(blogs)
        }
        else toast.error("خطایی پیش آمده. لطفا مجددا تلاش کنید")
      })
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">مدیریت {name}</h2>
          <p className="text-muted-foreground">مدیریت و ایجاد {name} ها</p>
        </div>
        <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
        <Link href={`/Admin/New${type}`}>
          {name} جدید
          <Plus className="h-4 w-4" />
        </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card">
          <CardHeader className="pb-3">
            <CardDescription>تعداد {name} ها</CardDescription>
            <CardTitle className="text-3xl font-bold text-primary">
              <Suspense fallback="0">
                {posts?.length}
              </Suspense>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="bg-card">
          <CardHeader className="pb-3">
            <CardDescription></CardDescription>
            <CardTitle className="text-3xl font-bold text-primary">
              <Suspense fallback="-----">
                {/* {posts?.at(0)?.date ? readableDate(posts()?.at(0)?.date || "") : "موجود نیست"} */}
              </Suspense>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="bg-card">
          <CardHeader className="pb-3">
            <CardDescription></CardDescription>
            <CardTitle className="text-3xl font-bold text-muted-foreground"></CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">آخرین {name} ها</h3>
        <div className="space-y-3">
          <Suspense fallback={<LoadingPage/>}>
            {posts?.length === 0 && <>
              <div className="bg-card rounded-md p-5 text-center flex flex-col gap-3 items-center">
                {name}ی یافت نشد!
                <Button>
                  <Link href={`/Admin/New${type}`}>
                    اضافه کردن
                  </Link>
                </Button>
              </div>
            </>}
            {posts.map((post) => (
              <Card className="bg-card transition-colors hover:bg-accent/50" key={post.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between gap-4 items-center">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-card-foreground">
                          {post.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {/* {readableDate(post.date)} */}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Button
                        size="sm"
                        variant="ghost"
                        asChild
                      >
                        <Link href={promptDetailsUrl(post.slug)}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                      <Link href={editPromptUrl(post.id)}>
                        <Edit className="h-4 w-4" />
                      </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        onClick={() => handleDelete(post)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
