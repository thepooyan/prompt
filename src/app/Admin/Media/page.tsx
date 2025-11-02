import MediaBtnClient from "@/components/admin/MediaBtnClient"
import MediaCard from "@/components/admin/MediaCard"
import { getAllFiles } from "@/server/s3Actions"
import { headers } from "next/headers"

const page = async () => {
  await headers()
  const files = await getAllFiles()
  return (
    <div className="p-5">
      <MediaBtnClient/>

      <div className="flex flex-wrap gap-4 ">
        {files.map(f => <MediaCard key={f}>{f}</MediaCard>)}
      </div>
    </div>
  )
}

export default page