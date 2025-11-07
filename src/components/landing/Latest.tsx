import { PromptCard } from "../PromptCard"
import { fetchThreePrompts } from "@/server/dataFetching"
import Link from "../ui/link"
import { Button } from "../ui/button"
import { ArrowLeft, Library } from "lucide-react"

export default async function Latest() {

  const posts = await fetchThreePrompts()

  return (
    <section id="latest" className="py-16 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white">جدیدترین پرامپت‌های آماده</h3>
          <p className="text-lg text-gray-400 mt-4">
                        جدیدترین پرامپت‌های هوش مصنوعی آماده برای استفاده در پروژه‌های شما. این پرامپت‌ها به‌طور ویژه برای کسب بهترین نتایج بهینه‌شده‌اند.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(p => <PromptCard prompt={p} key={p.id}/>)}
        </div>
        <Link href="/Prompts" className="flex justify-center mt-15">
          <Button className="mb-8" dir="rtl">
            <Library className="h-4 w-4 ml-2" />
            مشاهده کتابخانه کامل
            <ArrowLeft className="h-4 w-4 mr-2" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
