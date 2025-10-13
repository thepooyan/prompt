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
import { CallbackStore } from "@/lib/utils"
import { Check, Cross } from "lucide-react"
import { ReactNode, useEffect, useState } from "react"


type state = "" | "prompt" | "success" | "fail"
type passer = null | ((str: ReactNode, title: ReactNode, state: state) => void)
let passer:passer = null
const callbackStore = new CallbackStore()

export default function Modal() {
  const [content, setContent] = useState<ReactNode>(<></>)
  const [state, setState] = useState<state>("")
  const [title, setTitle] = useState<ReactNode>(<></>)
  const [open, setOpen] = useState(false)

    useEffect(() => {
        passer = (content: ReactNode, title: ReactNode, state:state = "") => {
          setTitle(title)
          setState(state)
          setContent(content)
          setOpen(true)
        }
    }, [])
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-right">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-right">
            {content}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => callbackStore.callYes()}>بله</AlertDialogAction>
          <AlertDialogCancel>خیر</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}


export const callModal = (content: ReactNode, title: ReactNode, state: state = "") => {
    passer?.(content, title, state)
}

callModal.prompt = (content: ReactNode) => {

  callModal(content, "آیا مطمین هستید؟", "prompt");
  return {
    yes: (callback: ()=>void) => {
      callbackStore.setYes(callback)
      return {
        no: (callback: ()=>void) => {
          callbackStore.setNo(callback)
        }
      }
    },
    no: (callback: ()=>void) => {
      callbackStore.setNo(callback)
      return {
        yes: (callback: ()=>void) => {
          callbackStore.setYes(callback)
        }
      }
    }
  }
}

callModal.success = (content: ReactNode) => callModal(content, <Check />, "success")
callModal.fail = (content: ReactNode) => callModal(content, <Cross />, "fail")