const page = async ({params}:{params: Promise<{cate: string, name: string}>}) => {
  const {cate, name} = await params
  return (
    <div>
      hi {cate} {name}
    </div>
  )
}

export default page
