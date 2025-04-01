import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreditCard, LayoutDashboard, Smartphone, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet, useLocation, Link } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  // Determine which menu item is active based on the current path
  const isActive = (path: string) => location.pathname === path;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col w-full">
        {/* Navbar */}
        <header className="sticky top-0 z-30 flex h-16 w-full items-center gap-4 border-b bg-background px-4 md:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex items-center font-semibold">
            <span className="text-primary">SWUK</span>
          </div>
          <nav className="hidden md:flex flex-1 items-center gap-5 text-sm ml-8">
            <Link
              to="/"
              className={
                isActive("/")
                  ? "font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              Dashboard
            </Link>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              About Us
            </a>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-md border px-3 py-1.5">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="font-medium">John Doe</div>
            </div>
          </div>
        </header>

        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar>
            <SidebarHeader className="border-b px-2">
              <div className="flex h-12 items-center px-2">
                <LayoutDashboard className="mr-2 h-5 w-5" />
                <span className="font-semibold">Dashboard</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={isActive("/")}>
                        <Link to="/">
                          <LayoutDashboard className="h-4 w-4" />
                          <span>Dashboard</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive("/customer-segment")}
                      >
                        <Link to="/customer-segment">
                          <Users className="h-4 w-4" />
                          <span>Customer Segment</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive("/transaction-history")}
                      >
                        <Link to="/transaction-history">
                          <CreditCard className="h-4 w-4" />
                          <span>Transaction History</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive("/digital-engagement")}
                      >
                        <Link to="/digital-engagement">
                          <Smartphone className="h-4 w-4" />
                          <span>Digital Engagement</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          {/* Main Content */}
          <main className="flex-1 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
