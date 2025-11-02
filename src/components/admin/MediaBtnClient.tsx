"use client"

import { Upload } from "lucide-react"
import UploadMediaBtn from "./UploadMediaBtn"
import { useRouter } from "next/navigation"


const MediaBtnClient = () => {

    const router = useRouter()

  return (
    <UploadMediaBtn onUploaded={() => router.refresh()}>
        آپلود
        <Upload/>
    </UploadMediaBtn>
  )
}

export default MediaBtnClient
