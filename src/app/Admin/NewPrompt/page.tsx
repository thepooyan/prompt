import PromptEditor from "@/components/pages/PromptEditor"
import { getAllCategories } from "@/server/dataFetching"

const page = async () => {
  const cate = await getAllCategories()
  return (
    <PromptEditor categories={cate}/>
  )
}

export default page
