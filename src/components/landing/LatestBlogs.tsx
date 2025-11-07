"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import BlogCard from "../parts/BlogCard";
import { Blog } from "@/db/schema";
import { Button } from "../ui/button";
import Link from "next/link";

interface p {
  blogs: Blog[]
}
export default function LatestBlogs({blogs}:p) {
  return (
    <section id="blog" className="py-16 bg-sidebar text-sidebar-foreground ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold ">
            آخرین مقالات از وبلاگ پرامپت بازار
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            دانش خود را در دنیای هوش مصنوعی و مهندسی پرامپت به‌روز نگه دارید. با مطالعه این مقالات می‌توانید از ابزارهای جدید و استراتژی‌های بهینه برای پیشرفت در دنیای هوش مصنوعی استفاده کنید.
          </p>
          <Button className="mt-4" size="lg" asChild>
            <Link href="/Blog">
              مشاهده همه
            </Link>
          </Button>
        </div>

        <>
        <Carousel className="m-6 ltr">
          <CarouselContent>
            {blogs.map(b => <CarouselItem className="lg:basis-1/3 md:basis-1/2 basis-1/1 " key={b.id}>
                <BlogCard blog={b}/>
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </>
      </div>
    </section>
  )
}
