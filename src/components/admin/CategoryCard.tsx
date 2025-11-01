"use client"
import { Category } from "@/db/schema";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { deleteCategory } from "@/server/mutation";
import { callModal } from "../layout/Modal";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const CategoryCard = ({c}:{c: Category}) => {

  const router = useRouter()

  const deleteMe = async () => {
    callModal.prompt(`${c.name} خذف شود؟`)
    .yes(async() => {
      const {ok} = await deleteCategory(c.id)
        if (ok) {
          toast.success("حذف شد!")
          router.refresh()
        } else {
          toast.error("خطا")
        }
    })
  }

  return <div className="flex border-1 border-muted rounded p-5 m-3 justify-between
    hover:bg-zinc-900 cursor-pointer transition-colors">
    <div>
      <span className="text-muted-foreground ml-2 text-sm">
        نام:
      </span>
      {c.name}
    </div>
    <div>
      <span className="text-muted-foreground ml-2 text-sm">
        اسلاگ:
      </span>
      {c.slug}
    </div>
    <Button variant="ghost" onClick={deleteMe}>
      <Trash className="text-destructive"/>
    </Button>
  </div>
}
