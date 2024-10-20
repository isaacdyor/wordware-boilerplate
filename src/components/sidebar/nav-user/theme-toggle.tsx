import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <DropdownMenuItem onClick={toggleTheme} className="hover:cursor-pointer">
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
      Toggle Theme
    </DropdownMenuItem>
  );
};
