import { Home, Newspaper } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "../ui/link";
const NavMenu = () => {
  return (
    <NavigationMenu className="justify-start flex-col rtl" >
      <NavigationMenuList className="flex-col justify-start">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="flex-row">
            <Link href="/">
              خانه
              <Home />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="flex-row">
            <Link href="/">
              بلاگ
              <Newspaper/>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>آموزش</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuViewport/>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
