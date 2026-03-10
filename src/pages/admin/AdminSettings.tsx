import AdminLayout from "@/components/admin/AdminLayout";
import { useAuth } from "@/hooks/useAuth";

const AdminSettings = () => {
  const { user } = useAuth();

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="font-display text-3xl text-foreground">Settings</h1>
        <p className="font-body text-muted-foreground mt-1">
          Manage your store settings
        </p>
      </div>

      <div className="max-w-2xl space-y-6">
        <div className="bg-card rounded-sm p-6 shadow-elegant">
          <h2 className="font-display text-xl text-foreground mb-4">Account</h2>
          <div className="space-y-3">
            <div>
              <p className="font-body text-sm text-muted-foreground">Email</p>
              <p className="font-body text-foreground">{user?.email}</p>
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">Role</p>
              <p className="font-body text-foreground">Administrator</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-sm p-6 shadow-elegant">
          <h2 className="font-display text-xl text-foreground mb-4">Store Information</h2>
          <div className="space-y-3">
            <div>
              <p className="font-body text-sm text-muted-foreground">Store Name</p>
              <p className="font-body text-foreground">Ceylon Tea</p>
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">Currency</p>
              <p className="font-body text-foreground">USD ($)</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-sm p-6 shadow-elegant">
          <h2 className="font-display text-xl text-foreground mb-4">Coming Soon</h2>
          <ul className="space-y-2 font-body text-sm text-muted-foreground">
            <li>• Payment gateway integration (Stripe)</li>
            <li>• Order management</li>
            <li>• Email notifications</li>
            <li>• Inventory tracking</li>
            <li>• Discount codes</li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
