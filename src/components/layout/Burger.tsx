"use client"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import Link from "../ui/link"
import HeaderSub, { HeaderSub as H } from "./HeaderSub"

interface p {
  guideSubmenu: H
  subMenu: H[]
}
const Burger = ({guideSubmenu, subMenu}:p) => {

  const [open , setOpen] = useState(true)

  return (
    <div className=" md:hidden ">
      <Button onClick={() => setOpen(prev => !prev)}>
        <Menu/>
      </Button>

      {open && <>
        <div className="h-dvh bg-muted text-muted-foreground fixed right-0 top-0 w-xs">
            <Link href="/">
              <Button variant="ghost">
                خانه
              </Button>
            </Link>

            {/* راهنما */}
            <HeaderSub {...guideSubmenu}/>

            {/* جامع */}
            <Link href="/Blog">
              <Button variant="ghost" className="text-base">
                بلاگ
              </Button>
            </Link>

            {/* محصولات - Three-layer dropdown */}
            {subMenu.map((s,i) => <HeaderSub {...s} key={i}/>)}

        </div>
      </>}
    </div>
  )
}

export default Burger
