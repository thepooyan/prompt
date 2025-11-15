"use client"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import NavMenu from "./NavMenu"

const Burger = () => {
  return (
     <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button>
          <Menu/>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">PromptBazar.ir</DrawerTitle>
        </DrawerHeader>
        <NavMenu/>
      </DrawerContent>
    </Drawer>
  )
}

export default Burger
