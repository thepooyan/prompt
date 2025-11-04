
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Prompt } from "@/db/schema"
import MyBreadcrumb from "../parts/MyBreadcrumb"
import { promptBreadcrumb } from "../ts/breadcrumb"
import { PromptCopyButton } from "./PromptCopyButton"
import Markdwon from "../util/Markdwon"

interface p { prompt: Prompt }
export default function PromptPageClient({ prompt }:p ) {

  const tagList = prompt.tags.split(",").map((tag) => tag.trim())

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700">
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

        <MyBreadcrumb items={promptBreadcrumb(prompt.title)}/>
        {/* Description */}
        <div className="mb-12">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{prompt.excerpt}</p>
        </div>

        {/* Prompt Display */}
        <div className="rounded-lg border bg-card">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-xl font-semibold">پرامپت</h2>
            <PromptCopyButton text={prompt.prompt} />
          </div>
          <div className="p-6">
            <pre className="ltr whitespace-pre-wrap font-mono text-sm leading-relaxed">{prompt.prompt}</pre>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <div className="text-3xl font-bold mb-5">نمونه خروجی واقعی</div>

          <Image
            className="rounded "
            src={prompt.picture || "/placeholder.svg"}
            alt={prompt.title}
            width={500}
            height={500}
            priority
          />
        </div>

        {/* Usage Tips */}
        {/* <div className="mt-12 rounded-lg border bg-muted/50 p-6">
        <h3 className="mb-3 text-lg font-semibold">نحوه استفاده</h3>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>پرامپت را با دکمه بالا کپی کرده و در دستیار هوش مصنوعی خود پیست کنید </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>بخش‌های داخل براکت را با اطلاعات مخصوص خودتان پر کنید</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>لحن و پارامترها را متناسب با نیاز خود تنظیم کنید</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>با نسخه‌های مختلف آزمایش کنید تا بهترین نتیجه را بگیرید</span>
          </li>
        </ul>
        </div> */}
        <div className="mb-12">
          <div className="prose-lg prose-zinc   p-10 rounded mt-10">
            <Markdwon>{prompt.description}</Markdwon>
          </div>
        </div>
      </div>
    </article>
  )
}

