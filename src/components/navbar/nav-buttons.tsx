import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const NavButtons: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <Link
        href="https://github.com/isaacdyor/wordware-boilerplate"
        target="_blank"
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "flex w-full gap-2 border md:hover:border-muted-foreground/50 dark:md:hover:border-border",
        )}
      >
        GitHub
        <GitHubLogoIcon />
      </Link>
      <Link
        href="/signup"
        className={cn(buttonVariants({ size: "sm" }), "w-full")}
      >
        Get started
      </Link>
    </div>
  );
};
