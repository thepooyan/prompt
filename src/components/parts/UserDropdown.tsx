"use client"
import { LogOut, Settings, User as UserIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { User } from "better-auth"
import Link from "../ui/link"

interface props {
  user: User
}
const UserDropdown = ({user}:props) => {
  const [open, setOpen] = useState(false)

  const handleLogout = async () => {
    await authClient.signOut()
  }
  
  return (
    <>
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button  className="relative h-9 w-9 text-white">
          <UserIcon/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 rtl">
        <div className="space-y-4">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="text-sm font-medium">خوش آمدید!</p>
            <p className="text-xs text-muted-foreground truncate">{user.email}</p>
          </div>
          <div className="flex flex-col space-y-1">
            <Button variant="ghost" className="justify-start h-9 px-2" onClick={() => setOpen(false)} asChild>
                <Link href="/Panel">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>پنل کاربری</span>
                </Link>
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-red-500 hover:text-red-600 hover:bg-red-50 h-9 px-2"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>خروج</span>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
    </>
  )
}

export default UserDropdown
