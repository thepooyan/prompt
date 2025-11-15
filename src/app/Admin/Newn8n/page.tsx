import PromptEditor from "@/components/pages/PromptEditor"
import { getAllCategories } from "@/server/dataFetching"

const page = async () => {
  const cate = await getAllCategories("n8n")
  return (
    <PromptEditor categories={cate} type="n8n"/>
  )
}

export default page
