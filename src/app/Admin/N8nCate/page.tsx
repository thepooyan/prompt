import { CategoryCard } from "@/components/admin/CategoryCard"
import NewCategory from "@/components/admin/NewCategory"
import { db } from "@/db"
import { promptCateTable } from "@/db/schema"
import { eq } from "drizzle-orm"

const page = async () => {

  const cate = await db.query.promptCateTable.findMany({where: eq(promptCateTable.type, "n8n")})

  return (
    <div>
      <NewCategory type="n8n"/>
      {cate.map(c => <CategoryCard key={c.slug} c={c}/>)}
    </div>
  )
}


export default page
