"use client"
import { Button } from "../ui/button"
import { ReactNode, useState } from "react"
import { uploadToS3 } from "@/server/actions"
import { toast } from "sonner"

interface p {
    children: ReactNode
    onUploaded?: (result: string) => void
}
const UploadMediaBtn = ({children, onUploaded}:p) => {
    const [loading, setLoading] = useState(false)

    const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files || files.length === 0) return
        
        if (files[0].size >= 1000000) return toast.error("حجم فایل باید کمتر از 1 مگابایت باشد")
        setLoading(true)
        uploadToS3(files[0])
        .then((result) => {
            onUploaded && onUploaded(result);
            toast.success("آپلود موفق بود")
        })
        .catch((e) => {
            console.log(e)
            toast.error("خطا در آپلود فایل لطفا مجددا تلاش کنید.")
        })
        .finally(() => setLoading(false))
    }

    return (
    <>
        <Button className="mb-5" loading={loading} type="button">
            <label htmlFor="file" className="cursor-pointer flex gap-2">
                {children}
            </label>
        </Button>
        <input type="file" className="hidden" id="file" onChange={changeHandler}/>
    </>
    )
}

export default UploadMediaBtn
