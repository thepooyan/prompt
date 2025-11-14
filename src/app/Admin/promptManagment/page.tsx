import PromptManagmentClient from "@/components/pages/PromptManagmentClient"
import { fetchPrompts } from "@/server/dataFetching"

const page = async () => {

  const data = await fetchPrompts()

  return (
    <PromptManagmentClient initialBlogs={data} type="prompt"/>
  )
}

export default page
