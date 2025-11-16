"use client"
import { toast } from "sonner"
import { Button } from "../ui/button"

const AddComment = () => {
  const click = () => {
    toast.error("لطفا جهت ثبت نظر، ابتدا وارد شوید")
  }
  return (
    <Button variant="outline" onClick={click}>
      نظر خود را ثبت کنید
    </Button>
  )
}

export default AddComment
