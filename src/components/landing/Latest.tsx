import { db } from "@/db"
import { promptsTable } from "@/db/schema"
import { PromptCard } from "../PromptCard"

export default async function Latest() {

  let posts = await db.select().from(promptsTable).limit(3)

  return (
    <section id="latest" className="py-16">
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
      </div>
    </section>
  )
}
