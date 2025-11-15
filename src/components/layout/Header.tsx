import Logo from "../parts/Logo"
import { Suspense } from "react"
import { Spinner } from "../ui/spinner"
import LoginButton from "./LoginButton"
import { getAllNavItems } from "@/server/dataFetching"
import Burger from "./Burger"
import NavItem from "./HeaderSub"

export default async function Header() {
  const navItems = await getAllNavItems()

  return (
    <header className="border-b border-border bg-background/30 backdrop-blur-xl sticky top-0 z-90 ">
      <div className="container mx-auto px-5 ">
        <div className="flex py-4 items-center justify-between">
          {/* Logo - Right side in RTL */}
          <div className="flex items-center gap-5 ">
            <Burger navItems={navItems}/>
            <Logo/>
          </div>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(nav => <NavItem item={nav} key={nav.label}/>)}
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

