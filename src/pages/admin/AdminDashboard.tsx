import { useEffect, useState } from "react";
import { Package, FolderOpen, DollarSign, TrendingUp } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    inStock: 0,
    featured: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [productsRes, categoriesRes] = await Promise.all([
        supabase.from("products").select("id, in_stock, featured"),
        supabase.from("categories").select("id"),
      ]);

      const products = productsRes.data || [];
      const categories = categoriesRes.data || [];

      setStats({
        totalProducts: products.length,
        totalCategories: categories.length,
        inStock: products.filter((p) => p.in_stock).length,
        featured: products.filter((p) => p.featured).length,
      });
    };

    fetchStats();
  }, []);

  const statCards = [
    { label: "Total Products", value: stats.totalProducts, icon: Package, color: "text-accent" },
    { label: "Categories", value: stats.totalCategories, icon: FolderOpen, color: "text-blue-500" },
    { label: "In Stock", value: stats.inStock, icon: TrendingUp, color: "text-green-500" },
    { label: "Featured", value: stats.featured, icon: DollarSign, color: "text-purple-500" },
  ];

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="font-display text-3xl text-foreground">Dashboard</h1>
        <p className="font-body text-muted-foreground mt-1">
          Welcome to your tea store admin panel
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <div key={stat.label} className="bg-card rounded-sm p-6 shadow-elegant">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
                <p className="font-display text-3xl text-foreground mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full bg-secondary ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-sm p-6 shadow-elegant">
          <h2 className="font-display text-xl text-foreground mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a
              href="/admin/products"
              className="block p-4 bg-secondary rounded-sm hover:bg-secondary/80 transition-colors"
            >
              <p className="font-body font-medium text-foreground">Add New Product</p>
              <p className="font-body text-sm text-muted-foreground">
                Create a new tea product for your store
              </p>
            </a>
            <a
              href="/admin/categories"
              className="block p-4 bg-secondary rounded-sm hover:bg-secondary/80 transition-colors"
            >
              <p className="font-body font-medium text-foreground">Manage Categories</p>
              <p className="font-body text-sm text-muted-foreground">
                Organize your products into collections
              </p>
            </a>
          </div>
        </div>

        <div className="bg-card rounded-sm p-6 shadow-elegant">
          <h2 className="font-display text-xl text-foreground mb-4">Getting Started</h2>
          <div className="space-y-4 font-body text-sm text-muted-foreground">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-medium">1</span>
              <p>Add your tea products with images, descriptions, and pricing</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-medium">2</span>
              <p>Organize products into categories for easy browsing</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-medium">3</span>
              <p>Mark your best products as featured to highlight them</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-foreground flex items-center justify-center text-xs font-medium">4</span>
              <p>Set up payment processing for orders (coming soon)</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
