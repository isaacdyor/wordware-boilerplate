import { cn } from "@/lib/utils";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-1.5 overflow-hidden text-2xl font-semibold tracking-tighter text-foreground"
    >
      <div className="flex overflow-hidden">
        <h1 className={cn("ml-0 transition-all duration-200 ease-in-out")}>
          Gregwire
        </h1>
      </div>
    </Link>
  );
};
