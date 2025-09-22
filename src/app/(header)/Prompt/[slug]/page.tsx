interface p {
    params: {slug: string}
}
const page = ({params}:p) => {
  return (
    <div>
        {params.slug}
    </div>
  )
}

export default page
