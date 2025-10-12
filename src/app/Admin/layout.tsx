import { Button } from "@/components/ui/button"
import Link from "@/components/ui/link"
import { ArrowLeft, FileText } from "lucide-react"
import { ReactNode } from "react"

export default function AdminLayout({children}:{children: ReactNode}) {
//   getAdminUser()
  return (
    <>
    <style>{`html {overflow: hidden}`}</style>
    <div className="dark min-h-screen bg-background text-foreground rtl  ">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="  text-sm font-bold text-primary-foreground">ا</span>
            </div>
            <h1 className="text-xl font-semibold">پنل ادمین</h1>
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild  >
          <Link href="/">
            بازگشت به سایت
            <ArrowLeft className="h-4 w-4" />
          </Link>
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Left Content Area */}
        <main className="flex-1 overflow-auto ">{children}</main>

        {/* Right Sidebar */}
        <aside className="w-64 border-l border-border bg-card">
          <nav className="p-4">
            <div className="space-y-1">
              <Link
                href="/Admin/BlogManagment"
                activeClassName="!bg-primary text-primary-foreground"
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors text-muted-foreground hover:bg-accent hover:text-accent-foreground`}>
                <FileText className="h-5 w-5" />
                وبلاگ
              </Link>
              <Link
                href="/Admin/PromptManagment"
                // activeclassName="!bg-primary text-primary-foreground"
                
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors text-muted-foreground hover:bg-accent hover:text-accent-foreground`}>
                <FileText className="h-5 w-5" />
                پرامپت
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </div>
    </>
  )
}
