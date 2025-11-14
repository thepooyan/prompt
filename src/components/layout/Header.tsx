import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "../parts/Logo"
import { Suspense } from "react"
import { Spinner } from "../ui/spinner"
import LoginButton from "./LoginButton"

export default async function Header() {

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

            {/* جامع */}
            <Link href="/Blog">
              <Button variant="ghost" className="text-base">
                بلاگ
              </Button>
            </Link>

            {/* محصولات - Three-layer dropdown */}
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

