import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

type HamburgerButtonProps = {
  toggleFlyOut: () => void;
};

export const HamburgerButton = (props: HamburgerButtonProps) => (
  <div
    className="inset-y-0 mr-2 flex items-center px-4 lg:hidden"
    onMouseDown={() => props.toggleFlyOut()}
  >
    <button
      className={cn(
        "text-muted-foreground focus:ring-brand hover:bg-surface-100 inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset",
      )}
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>

      <Menu />
    </button>
  </div>
);
