import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { Category, promptCateTable } from "@/db/schema"

const page = async () => {

  const cate = await db.select().from(promptCateTable)

  return (
    <div>
      <Button>Add</Button>
      {cate.map(c => <Card key={c.slug} c={c}/>)}
    </div>
  )
}

const Card = ({c}:{c: Category}) => 
  <div>
    {c.name}
    {c.slug}
  </div>

export default page
