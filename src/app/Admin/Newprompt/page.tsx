import PromptEditor from "@/components/pages/PromptEditor"
import { getAllAuthors, getAllCategories } from "@/server/dataFetching"

const page = async () => {
  const [cate, authors] = await Promise.all([getAllCategories("prompt"), getAllAuthors()]);
  return (
    <PromptEditor categories={cate} type="prompt" authors={authors}/>
  )
}

export default page
