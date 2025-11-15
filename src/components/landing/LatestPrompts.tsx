import { PromptCard } from "../PromptCard"
import { getThreePrompts } from "@/server/dataFetching"
import Link from "../ui/link"
import { Button } from "../ui/button"
import { ArrowLeft, Library } from "lucide-react"
import { promptType } from "@/db/schema"
import { capitalize, getEntityName } from "@/lib/utils"

export default async function LatestPrompts({type}: {type: promptType}) {

  const posts = await getThreePrompts(type)
  const name = getEntityName(type)

  return (
    <section id="latest" className="py-16  bg-sidebar text-sidebar-foreground ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold ">جدیدترین {name}‌های آماده</h3>
          <p className="text-lg text-muted-foreground mt-4">
                        جدیدترین {name}‌های هوش مصنوعی آماده برای استفاده در پروژه‌های شما. این پرامپت‌ها به‌طور ویژه برای کسب بهترین نتایج بهینه‌شده‌اند.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(p => <PromptCard prompt={p} key={p.id}/>)}
        </div>
        <Link href={`/${capitalize(type)}`} className="flex justify-center mt-15">
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
