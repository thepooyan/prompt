import "server-only"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Library, ArrowLeft } from "lucide-react"
import { PromptCard } from "@/components/PromptCard"
import { fetchPrompts } from "@/server/dataFetching"

export default async function Home() {
  const featuredPrompts = await fetchPrompts()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">مجموعه پرامپت‌های هوش مصنوعی</h1>
          <p className="text-muted-foreground mb-6">بهترین پرامپت‌ها برای کارهای مختلف شما</p>

          <Link href="/library">
            <Button className="mb-8" dir="rtl">
              <Library className="h-4 w-4 ml-2" />
              مشاهده کتابخانه کامل
              <ArrowLeft className="h-4 w-4 mr-2" />
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 text-center">پرامپت‌های ویژه</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {featuredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">{featuredPrompts.length - 3} پرامپت دیگر در کتابخانه موجود است</p>
          <Link href="/library">
            <Button variant="outline" dir="rtl">
              مشاهده همه پرامپت‌ها
              <ArrowLeft className="h-4 w-4 mr-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}