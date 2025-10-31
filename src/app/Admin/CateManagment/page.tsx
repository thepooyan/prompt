import { CategoryCard } from "@/components/admin/CategoryCard"
import NewCategory from "@/components/admin/NewCategory"
import { db } from "@/db"
import { promptCateTable } from "@/db/schema"

const page = async () => {

  const cate = await db.select().from(promptCateTable)

  return (
    <div>
      <NewCategory/>
      {cate.map(c => <CategoryCard key={c.slug} c={c}/>)}
    </div>
  )
}


export default page
