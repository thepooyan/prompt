import PromptEditor from "@/components/pages/PromptEditor"
import { getAllCategories } from "@/server/dataFetching"

const page = async () => {
  const cate = await getAllCategories("prompt")
  return (
    <PromptEditor categories={cate} type="prompt"/>
  )
}

export default page
