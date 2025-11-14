import LibraryClient from "@/components/LibraryClient"
import { getAllPrompts } from "@/server/dataFetching"

const page = async () => {

    let p = await getAllPrompts()

  return (
    <LibraryClient prompts={p}/>
  )
}

export default page
