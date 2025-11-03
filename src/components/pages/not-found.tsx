import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound({name}:{name: string}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <FileQuestion className="w-20 h-20 text-muted-foreground" />
        </div>
        <h1 className="text-4xl font-bold">{name} یافت نشد</h1>
        <p className="text-muted-foreground text-lg">
          متاسفانه {name} مورد نظر حذف شده یا وجود ندارد
        </p>
        <Button asChild>
          <Link href="/">بازگشت به خانه</Link>
        </Button>
      </div>
    </div>
  )
}
