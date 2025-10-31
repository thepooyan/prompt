import { TriangleAlert } from "lucide-react";
import { Button } from "../ui/button";

export function ErrorPage() {
  const refresh = () => {
    window.location.reload()
  }
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-1">
        <TriangleAlert className="text-destructive mb-3" size="100"/>

        <p className="text-sm text-muted-foreground">متاسفانه در بارگزاری صفحه مشکلی پیش آمده</p>
        <p className="text-sm text-muted-foreground">لطفا مجددا تلاش کنید</p>

        <Button onClick={refresh} className="mt-3">تلاش مجدد</Button>
      </div>
    </div>
  )
}
