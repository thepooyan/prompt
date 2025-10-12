import LibraryClient from "@/components/LibraryClient"
import { db } from "@/db"
import { promptsTable } from "@/db/schema"
import { fetchPrompts } from "@/server/dataFetching"

const page = async () => {

    let p = await fetchPrompts()

  return (
    <LibraryClient prompts={p}/>
  )
}

export default page