import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const NavButtons: React.FC<{ isOpen?: boolean }> = ({ isOpen }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <Link
        href="/signin"
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "h-8 w-full",
          !isOpen ? "lg:w-auto lg:text-xs" : "null"
        )}
      >
        Sign In
      </Link>
      <Link
        href="/signup"
        className={cn(
          buttonVariants({ size: "sm" }),
          "h-8 w-full",
          !isOpen ? "lg:w-auto lg:text-xs" : "null"
        )}
      >
        Get started
      </Link>
    </div>
  );
};
