"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navItem } from "./Burger";

export interface HeaderSub {
  item: navItem
}
const HeaderSub = ({ item }:HeaderSub) => {

  const [open, setOpen] = useState<boolean>(false);
  const OptionalLink = item.href ? Link : "div";
  const hasSubMenu = (item.submenu && item.submenu.length > 0)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => { setOpen(false); }}
    >
      <Button variant="ghost" className="text-base gap-1" asChild>
        <OptionalLink href={item.href}>
          {item.label}
          {hasSubMenu && 
          <ChevronDown className={cn(`h-4 w-4 transition-all`, open && "rotate-180")} />}
        </OptionalLink>
      </Button>

      {/* Layer 1: Main Categories */}
      {hasSubMenu && 
      <div
        className={cn(`absolute left-0 top-full w-56 rounded-lg overflow-hidden border border-border bg-popover shadow-lg z-50 transition-all duration-200 origin-top`,
          open ?
          "opacity-100 visible scale-y-100 translate-y-0"
          :
          "opacity-0 invisible scale-y-95 -translate-y-2 pointer-events-none")}
      >
        {item.submenu?.map(sub => (
          <div
            key={sub.label}
            className="relative"
          >
            <Link className={`w-full px-4 py-3 text-right hover:bg-accent hover:text-accent-foreground
              flex items-center justify-between transition-colors duration-150`}
              href={sub.href}
            >
              {sub.label}
            </Link>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default HeaderSub;
