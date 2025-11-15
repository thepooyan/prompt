import LibraryClient from "@/components/LibraryClient"
import { getAllPrompts } from "@/server/dataFetching"

const page = async () => {

  const p = await getAllPrompts("n8n")

  return (
    <LibraryClient prompts={p}/>
  )
}

export default page
