import { Suspense } from "react"

interface p {
  params: Promise<{slug: string}>
}
const page = (p:p) => {
  return (
    <Suspense>
      <Inner {...p}/>
    </Suspense>
  )
}

const Inner = async ({params}:p) => {
  const {slug} = await params
  
  return (
    <>
      {slug}
    </>
  )
}

export default page