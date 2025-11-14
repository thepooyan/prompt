import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "../parts/Logo"
import HeaderSub from "./HeaderSub"
import { Suspense } from "react"
import { Spinner } from "../ui/spinner"
import LoginButton from "./LoginButton"
import { getAllMenuItems } from "@/server/dataFetching"

export default async function Header() {
  const subMenu = await getAllMenuItems()

  const guideSubmenu:menuItems[] = [
    {name: "پرامپت چیست؟", slug: "what-is-prompt", cate: []},
    {name: "n8n چیست؟", slug: "what-is-n8n", cate: []},
    {name: "آموزش نصب n8n", slug: "download-install-n8n", cate: []},
  ]

  return (
    <header className="border-b border-border bg-background/30 backdrop-blur-xl sticky top-0 z-20 ">
      <div className="container mx-auto px-5 ">
        <div className="flex py-4 items-center justify-between">
          {/* Logo - Right side in RTL */}
          <Logo/>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center gap-1">
            {/* خانه */}
            <Link href="/">
              <Button variant="ghost">
                خانه
              </Button>
            </Link>

            {/* راهنما */}
            {/* <HeaderSub subItems={guideSubmenu} mainItem={{}} title="راهنما جامع"/> */}

            {/* جامع */}
            <Link href="/Blog">
              <Button variant="ghost" className="text-base">
                بلاگ
              </Button>
            </Link>

            {/* محصولات - Three-layer dropdown */}
            {subMenu.map(s => <HeaderSub {...s} />)}
          </nav>

          {/* Login Button - Left side in RTL */}
          <Suspense fallback={<Spinner/>}>
            <LoginButton/>
          </Suspense>
        </div>
      </div>
    </header>
  )
}

