"use client"
import { Upload } from "lucide-react"
import { Button } from "../ui/button"
import { uploadToS3 } from "@/server/actions"

interface p {
    onUploaded: (url: string) => void

}
const UploadBtn = ({onUploaded}:p) => {

    const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files || files.length === 0) return
        let result = await uploadToS3(files[0])
        onUploaded(result)
    }

  return (
    <>
        <Button type="button" variant="outline" size="sm" asChild>
            <label htmlFor="file" className="cursor-pointer">
            <Upload className="h-4 w-4" />
            </label>
        </Button>
        <input type="file" className="hidden" id="file" onChange={changeHandler}/>
    </>
  )
}

export default UploadBtn
