import PromptManagmentClient from "@/components/pages/PromptManagmentClient"
import { getAllN8n } from "@/server/dataFetching"

const page = async () => {

  const data = await getAllN8n()

  return (
    <PromptManagmentClient initialBlogs={data} type="n8n"/>
  )
}

export default page
