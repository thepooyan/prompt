import PromptManagmentClient from "@/components/pages/PromptManagmentClient"
import { getAllPrompts } from "@/server/dataFetching"

const page = async () => {

  const data = await getAllPrompts()

  return (
    <PromptManagmentClient initialBlogs={data} type="prompt"/>
  )
}

export default page
