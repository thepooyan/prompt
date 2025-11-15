import PromptEditor from "@/components/pages/PromptEditor"
import { getAllAuthors, getAllCategories } from "@/server/dataFetching"

const page = async () => {
  const [cate, authors] = await Promise.all([ getAllCategories("n8n"), getAllAuthors() ])
  return (
    <PromptEditor categories={cate} type="n8n" authors={authors}/>
  )
}

export default page
