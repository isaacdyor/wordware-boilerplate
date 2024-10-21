"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Logo } from "../logo";
import { NavButtons } from "./nav-buttons";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

export const navItems = [
  { title: "Home", href: "/" },
  { title: "Docs", href: "/docs" },
  { title: "Pricing (free)", href: "/pricing" },
];

export function Navbar() {
  return (
    <div className="absolute top-0 z-40 w-full bg-transparent px-4 lg:px-24 xl:px-36">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 overflow-hidden text-2xl font-semibold tracking-tighter text-foreground"
          >
            <Logo />
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent",
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:flex">
          <NavButtons />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
