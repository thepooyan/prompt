"use client"
import Image from "next/image"
import { Button } from "../ui/button"
import { Copy, Trash } from "lucide-react"
import { callModal } from "../layout/Modal"
import Copyable from "../ui/copyable"

interface p {
    children: string
}

const MediaCard = ({children}:p) => {
    const url = `https://c327107.parspack.net/${children}`

    const remove = () => {
        callModal.prompt("حذف شود؟")
        .yes(() => {

        })
    }

  return (
    <div className="bg-zinc-900 cursor-pointer transition-colors p-5 w-max rounded flex justify-between items-center flex-col gap-5">
        <Image width={200} height={200} src={url} alt=""/>
        <div className="space-x-1">
            <Copyable toCopy={url}>
                <Button variant="secondary"><Copy/></Button>
            </Copyable>
            <Button variant="secondary" onClick={remove}><Trash className="text-destructive font-bold" /></Button>
        </div>
    </div>
  )
}

export default MediaCard