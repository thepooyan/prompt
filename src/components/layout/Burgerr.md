"use client"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import Link from "../ui/link"
import HeaderSub, { HeaderSub as H } from "./HeaderSub"
import { cn } from "@/lib/utils"

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
          <MenuItem title="خانه" href="/" />
          <MenuItem title={guideSubmenu.mainItem.name} href={guideSubmenu.mainItem.slug || ""} />
          {guideSubmenu.subItems.map(s => <MenuItem title={s.name} href={s.slug} key={s.slug} dented/>)}
          <MenuItem title="بلاگ" href="/Blog" />

            {subMenu.map((s,i) => <HeaderSub {...s} key={i}/>)}

        </div>
      </>}
    </div>
  )
}

const MenuItem = ({title, href, dented}:{title: string, href: string, dented?: boolean}) => {
  return <Link href={href}
    className={cn(
      "block p-5",
      dented && `mr-5`)}
  >{title}</Link>
}

export default Burger
