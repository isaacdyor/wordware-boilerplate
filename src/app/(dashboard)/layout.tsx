import { AppSidebar } from "@/components/sidebar";
import { SidebarBreadcrumbs } from "@/components/sidebar/sidebar-breadcrumbs";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getUser } from "@/lib/supabase/server";
import { UserProvider } from "@/providers/auth-provider";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  const { user } = await getUser();
  if (!user) return null;

  return (
    <UserProvider user={user}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <SidebarBreadcrumbs />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </UserProvider>
  );
};

export default RootLayout;
