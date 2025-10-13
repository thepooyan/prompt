"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { ReactNode, useEffect, useState } from "react"


type state = "prompt" | ""
type passer = null | ((str: ReactNode, state: state) => void)
let passer:passer = null

export default function Modal() {
  const [content, setContent] = useState<ReactNode>(<></>)
  const [state, setState] = useState<state>("")
  const [open, setOpen] = useState(false)

    useEffect(() => {
        passer = (content: ReactNode, state:state = "") => {
          setState(state)
          setContent(content)
          setOpen(true)
        }
    }, [])
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-right">آیا مطمين هستید؟</AlertDialogTitle>
          <AlertDialogDescription className="text-right">
            {content}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>بله</AlertDialogAction>
          <AlertDialogCancel>خیر</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export const callModal = (content: ReactNode, state: state = "") => {
    passer?.(content, state)
}

callModal.prompt = (content: ReactNode) => callModal(content, "prompt")