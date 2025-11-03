"use client"
import { ChevronDown } from "lucide-react"
import Link from "../ui/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface p {
  title: string
  items: {title: string, link: string}[]
}
const HeaderSub = ({title, items}:p) => {

  const [open, setOpen] = useState(false)
  
  return (
    <div className="flex gap-1 items-center cursor-pointer hover:text-primary py-5 group"
      onMouseEnter={() =>setOpen(true)} 
      onMouseLeave={() => setOpen(false)}
    >
      {title}
      <ChevronDown className="group-hover:rotate-180 transition-all"/>

      <div className={cn(
        "absolute bg-zinc-800 flex flex-col rounded transition-all text-white overflow-hidden",
        "opacity-0 top-[calc(100%-4rem)] invisible",
        open && "opacity-100 top-[calc(100%-2rem)] visible"
      )}>
        {items.map(i => <Link key={i.title} href={i.link}
          className="p-3 hover:bg-zinc-900 hover:text-primary"
        >
          {i.title}
        </Link>)}
      </div>

    </div>
  )
}

export default HeaderSub
