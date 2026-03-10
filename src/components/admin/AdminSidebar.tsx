import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, FolderOpen, Settings, LogOut, Home } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Categories", href: "/admin/categories", icon: FolderOpen },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

const AdminSidebar = () => {
  const location = useLocation();
  const { signOut } = useAuth();

  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen">
      <div className="p-6 border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="font-display text-2xl text-foreground">
            <span className="text-accent">Ceylon</span> Tea
          </h1>
        </Link>
        <p className="font-body text-xs text-muted-foreground mt-1">Admin Dashboard</p>
      </div>

      <nav className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-sm font-body text-sm transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 pt-8 border-t border-border space-y-1">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-sm font-body text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Home className="h-5 w-5" />
            View Store
          </Link>
          <button
            onClick={signOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-sm font-body text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
