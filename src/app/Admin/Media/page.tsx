import MediaCard from "@/components/admin/MediaCard"
import { getAllFiles } from "@/server/s3Actions"

const page = async () => {
    const files = await getAllFiles()
  return (
    <div>
      <div className="grid grid-cols-4 gap-y-4 p-5 ">
        {files.map(f => <MediaCard>{f}</MediaCard>)}
      </div>
    </div>
  )
}

export default page