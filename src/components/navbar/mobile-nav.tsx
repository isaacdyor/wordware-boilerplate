import { Menu } from "lucide-react";
import { SheetTrigger, SheetContent, Sheet } from "../ui/sheet";
import { useState } from "react";
import Link from "next/link";
import { navItems } from ".";
import { NavButtons } from "./nav-buttons";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="h-10 w-10 p-0 hover:bg-secondary rounded-md inline-flex items-center justify-center">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] flex flex-col justify-between"
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <NavButtons />
      </SheetContent>
    </Sheet>
  );
}
