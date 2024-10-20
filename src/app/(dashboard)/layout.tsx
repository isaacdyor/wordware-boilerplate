import { AppSidebar } from "@/components/sidebar";
import { SidebarBreadcrumbs } from "@/components/sidebar/sidebar-breadcrumbs";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarBreadcrumbs />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default RootLayout;
