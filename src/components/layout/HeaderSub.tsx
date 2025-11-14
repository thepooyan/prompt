"use client";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "../ui/link";
import { cn } from "@/lib/utils";
import { HeaderLink } from "@/db/schema";

export interface HeaderSub {
  subItems: HeaderLink[]
  mainItem: HeaderLink
}
const HeaderSub = ({ mainItem, subItems }:HeaderSub) => {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => { setOpen(false); }}
    >
      <Button variant="ghost" className="text-base gap-1" asChild>
        <Link href={"/" + mainItem.slug}>
          {mainItem.name}
          {subItems.length > 0 && 
          <ChevronDown className={cn(`h-4 w-4 transition-all`, open && "rotate-180")} />}
        </Link>
      </Button>

      {/* Layer 1: Main Categories */}
      {subItems.length > 0 && 
      <div
        className={cn(`absolute left-0 top-full w-56 rounded-lg overflow-hidden border border-border bg-popover shadow-lg z-50 transition-all duration-200 origin-top`,
          open ?
          "opacity-100 visible scale-y-100 translate-y-0"
          :
          "opacity-0 invisible scale-y-95 -translate-y-2 pointer-events-none")}
      >
        {subItems.map(sub => (
          <div
            key={sub.name}
            className="relative"
          >
            <Link className="w-full px-4 py-3 text-right hover:bg-accent hover:text-accent-foreground
              flex items-center justify-between transition-colors duration-150"
              href={"/" + sub.slug}
            >
              <span>{sub.name}</span>
            </Link>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default HeaderSub;