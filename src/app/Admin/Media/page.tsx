import { getAllFiles } from "@/server/s3Actions"

const page = async () => {
    const files = await getAllFiles()
  return (
    <div>
        {files.map(f => <div>{f}</div>)}
    </div>
  )
}

export default page