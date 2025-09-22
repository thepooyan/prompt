import LibraryClient from "@/components/LibraryClient"
import { db } from "@/db"
import { promptsTable } from "@/db/schema"

const page = async () => {

    let p = await db.select().from(promptsTable)

  return (
    <LibraryClient prompts={p}/>
  )
}

export default page