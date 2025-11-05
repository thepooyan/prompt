import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "../parts/Logo"
import HeaderSub from "./HeaderSub"
import { Suspense } from "react"
import { Spinner } from "../ui/spinner"
import LoginButton from "./LoginButton"
import { getAllSubmenus } from "@/server/dataFetching"

export default async function Header() {
  const subMenu = await getAllSubmenus()

  return (
    <header className="border-b border-border bg-background/30 backdrop-blur-xl sticky top-0 z-20 ">
      <div className="container mx-auto ">
        <div className="flex py-4 items-center justify-between">
          {/* Logo - Right side in RTL */}
          <Logo/>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center gap-1">
            {/* خانه */}
            <Link href="/">
              <Button variant="ghost" className="text-base">
                خانه
              </Button>
            </Link>

            {/* راهنما */}
            <Link href="/guide">
              <Button variant="ghost" className="text-base">
                راهنما
              </Button>
            </Link>

            {/* جامع */}
            <Link href="/comprehensive">
              <Button variant="ghost" className="text-base">
                جامع
              </Button>
            </Link>

            {/* محصولات - Three-layer dropdown */}
            <HeaderSub subMenu={subMenu}/>
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

