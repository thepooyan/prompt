import CheckAdmin from "@/components/admin/CheckAdmin"
import { Button } from "@/components/ui/button"
import Link from "@/components/ui/link"
import { auth } from "@/lib/auth"
import { isAdmin } from "@/server/serverUtil"
import { ArrowLeft, FileText } from "lucide-react"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

export default async function AdminLayout({children}:{children: ReactNode}) {

  const session = await auth.api.getSession({headers: await headers()})
  const user = session?.user
  if (!user) return redirect("/")
  if (!isAdmin(user)) return redirect("/")

  

  const items = [
    {
      name: "بلاگ",
      slug: "BlogManagment"
    },
    {
      name: "پرامپت",
      slug: "promptManagment"
    }, 
    {
      name: "n8n",
      slug: "n8nManagment"
    }, 
    {
      name: "دسته بندی پرامپت",
      slug: "PromptCate"
    }, 
    {
      name: "دسته بندی n8n",
      slug: "N8nCate"
    }, 
    {
      name: "مدیا",
      slug: "Media"
    }, 
    {
      name: "سؤ",
      slug: "Seo"
    }, 
  ]
  return (
    <>
    <style>{`html {overflow: hidden}`}</style>
    <CheckAdmin/>
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
        <aside className="w-64 border-r border-border bg-card">
          <nav className="p-4">
            <div className="space-y-1">
                {items.map(i => <Link
                key={i.slug}
                href={`/Admin/${i.slug}`}
                activeClassName="!bg-primary text-primary-foreground"
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors text-muted-foreground hover:bg-accent hover:text-accent-foreground`}>
                <FileText className="h-5 w-5" />
                  {i.name}
              </Link>)}
            </div>
          </nav>
        </aside>
      </div>
    </div>
    </>
  )
}
