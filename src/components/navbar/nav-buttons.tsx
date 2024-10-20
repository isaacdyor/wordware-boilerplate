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
          "w-full",
          !isOpen ? "lg:w-auto" : "null"
        )}
      >
        Sign In
      </Link>
      <Link
        href="/signup"
        className={cn(
          buttonVariants({ size: "sm" }),
          "w-full",
          !isOpen ? "lg:w-auto" : "null"
        )}
      >
        Get started
      </Link>
    </div>
  );
};
