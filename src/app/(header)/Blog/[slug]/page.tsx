import BlogAsync from "@/components/pages/BlogAsync"
import { Suspense } from "react"

interface props {
  params: Promise<{slug: string}>
}
const page = (props:props) => {
  return (
    <Suspense>
      <BlogAsync {...props}/>
    </Suspense>
  )
}

export default page
