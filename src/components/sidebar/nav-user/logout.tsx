import { Loader2, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function Logout() {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogout = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      router.push("/");
    }
    setLoading(false);
  };

  return (
    <DropdownMenuItem onClick={handleLogout} className="hover:cursor-pointer">
      {loading ? <Loader2 className="animate-spin" /> : <LogOut />}
      Log out
    </DropdownMenuItem>
  );
}
