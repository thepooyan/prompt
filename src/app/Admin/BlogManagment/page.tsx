"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "@/components/ui/link";
import { Blog } from "@/db/schema";
import { useState } from "react";
import { limitChar, readableDate } from "@/lib/utils";
import { toast } from "sonner";

export default function WeblogPanel() {
  const [posts, setPosts] = useState([])

  const handleDelete = (post: Blog) => {
    toast.prompt(`"${limitChar(post.title, 40)}" حذف شود؟`)
    .yes(async () => {
        toast.wait()
        let {ok} = await deletePost(post.id)
        if (ok) {
          toast.success("با موفقیت حذف شد!")
          revalidate("blogs")
        }
        else toast.fail("خطایی پیش آمده. لطفا مجددا تلاش کنید")
      })
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">مدیریت وبلاگ</h2>
          <p className="text-muted-foreground">مدیریت و ایجاد بلاگ ها</p>
        </div>
        <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" as={Link} href="/Admin/NewBlog">
          پست جدید
          <FiPlus className="h-4 w-4" />
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card">
          <CardHeader className="pb-3">
            <CardDescription>تعداد پست ها</CardDescription>
            <CardTitle className="text-3xl font-bold text-primary">
              <Suspense fallback="0">
                {posts()?.length}
              </Suspense>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="bg-card">
          <CardHeader className="pb-3">
            <CardDescription>تاریخ آخرین پست</CardDescription>
            <CardTitle className="text-3xl font-bold text-primary">
              <Suspense fallback="-----">
                {posts()?.at(0)?.date ? readableDate(posts()?.at(0)?.date || "") : "موجود نیست"}
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
        <h3 className="text-xl font-semibold">آخرین بلاگ ها</h3>
        <div className="space-y-3">
          <Suspense fallback={<Loading />}>
            {posts()?.length === 0 && <>
              <div className="bg-card rounded-md p-5 text-center flex flex-col gap-3 items-center">
                بلاگی یافت نشد!
                <Button>
                  <Link href="/Admin/NewBlog">
                    اضافه کردن
                  </Link>
                </Button>
              </div>
            </>}
            {posts()?.map((post) => (
              <Card className="bg-card transition-colors hover:bg-accent/50">
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
                        <FiCalendar className="h-3 w-3" />
                        {readableDate(post.date)}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Button
                        size="sm"
                        variant="ghost"
                        as={Link} href={`/Weblog/${encodeURIComponent(post.slug)}`}
                      >
                        <FiEye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" as={Link} href={`/Admin/EditBlog/${post.id}`}>
                        <FiEdit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        onClick={() => handleDelete(post)}
                      >
                        <FiTrash2 className="h-4 w-4" />
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