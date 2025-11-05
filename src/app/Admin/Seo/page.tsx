import NewRedirect from "@/components/admin/NewRedirect"
import { RedirectCard } from "@/components/admin/RedirectCard"
import { db } from "@/db"
import { redirectsTable } from "@/db/schema"

const page = async () => {

  const cate = await db.select().from(redirectsTable)

  return (
    <div>
      <NewRedirect/>
      {cate.map(c => <RedirectCard key={c.from} c={c}/>)}
    </div>
  )
}


export default page
