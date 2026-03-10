import { useState, useEffect } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface ProductFormProps {
  product?: {
    id: string;
    name: string;
    slug: string;
    price: number;
    image_url: string | null;
    in_stock: boolean;
    featured: boolean;
    category_id: string | null;
  } | null;
  onClose: () => void;
  onSave: () => void;
}

const ProductForm = ({ product, onClose, onSave }: ProductFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  
  const [formData, setFormData] = useState({
    name: product?.name || "",
    slug: product?.slug || "",
    description: "",
    price: product?.price?.toString() || "",
    original_price: "",
    category_id: product?.category_id || "",
    image_url: product?.image_url || "",
    badge: "",
    weight: "",
    origin: "",
    caffeine_level: "",
    brewing_temp: "",
    brewing_time: "",
    brewing_amount: "",
    in_stock: product?.in_stock ?? true,
    featured: product?.featured ?? false,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase.from("categories").select("id, name, slug").order("name");
      setCategories(data || []);
    };
    fetchCategories();

    if (product?.id) {
      const fetchProductDetails = async () => {
        const { data } = await supabase
          .from("products")
          .select("*")
          .eq("id", product.id)
          .single();
        
        if (data) {
          setFormData({
            name: data.name || "",
            slug: data.slug || "",
            description: data.description || "",
            price: data.price?.toString() || "",
            original_price: data.original_price?.toString() || "",
            category_id: data.category_id || "",
            image_url: data.image_url || "",
            badge: data.badge || "",
            weight: data.weight || "",
            origin: data.origin || "",
            caffeine_level: data.caffeine_level || "",
            brewing_temp: data.brewing_temp || "",
            brewing_time: data.brewing_time || "",
            brewing_amount: data.brewing_amount || "",
            in_stock: data.in_stock ?? true,
            featured: data.featured ?? false,
          });
        }
      };
      fetchProductDetails();
    }
  }, [product?.id]);

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setFormData({
      ...formData,
      name,
      slug: product ? formData.slug : generateSlug(name),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const productData = {
      name: formData.name,
      slug: formData.slug,
      description: formData.description || null,
      price: parseFloat(formData.price),
      original_price: formData.original_price ? parseFloat(formData.original_price) : null,
      category_id: formData.category_id || null,
      image_url: formData.image_url || null,
      badge: formData.badge || null,
      weight: formData.weight || null,
      origin: formData.origin || null,
      caffeine_level: formData.caffeine_level || null,
      brewing_temp: formData.brewing_temp || null,
      brewing_time: formData.brewing_time || null,
      brewing_amount: formData.brewing_amount || null,
      in_stock: formData.in_stock,
      featured: formData.featured,
    };

    let error;

    if (product?.id) {
      const result = await supabase
        .from("products")
        .update(productData)
        .eq("id", product.id);
      error = result.error;
    } else {
      const result = await supabase.from("products").insert(productData);
      error = result.error;
    }

    if (error) {
      toast({
        title: "Error saving product",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({ title: product ? "Product updated" : "Product created" });
      onSave();
    }

    setIsLoading(false);
  };

  return (
    <div>
      <button
        onClick={onClose}
        className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </button>

      <h1 className="font-display text-3xl text-foreground mb-8">
        {product ? "Edit Product" : "Add New Product"}
      </h1>

      <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
        <div className="bg-card rounded-sm p-6 shadow-elegant space-y-4">
          <h2 className="font-display text-xl text-foreground mb-4">Basic Information</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Product Name *
              </label>
              <Input
                value={formData.name}
                onChange={handleNameChange}
                placeholder="Earl Grey Supreme"
                required
              />
            </div>
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Slug *
              </label>
              <Input
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="earl-grey-supreme"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-body text-sm text-foreground mb-2">
              Description
            </label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="A sophisticated blend of premium Ceylon black tea..."
              rows={4}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Price *
              </label>
              <Input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="24.99"
                required
              />
            </div>
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Original Price
              </label>
              <Input
                type="number"
                step="0.01"
                value={formData.original_price}
                onChange={(e) => setFormData({ ...formData, original_price: e.target.value })}
                placeholder="29.99"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Category
              </label>
              <Select
                value={formData.category_id}
                onValueChange={(value) => setFormData({ ...formData, category_id: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Image URL
              </label>
              <Input
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Badge
              </label>
              <Select
                value={formData.badge}
                onValueChange={(value) => setFormData({ ...formData, badge: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select badge" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="Best Seller">Best Seller</SelectItem>
                  <SelectItem value="Sale">Sale</SelectItem>
                  <SelectItem value="Premium">Premium</SelectItem>
                  <SelectItem value="Limited Edition">Limited Edition</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-sm p-6 shadow-elegant space-y-4">
          <h2 className="font-display text-xl text-foreground mb-4">Product Details</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Weight
              </label>
              <Input
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                placeholder="100g"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Origin
              </label>
              <Input
                value={formData.origin}
                onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                placeholder="Nuwara Eliya, Sri Lanka"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Caffeine Level
              </label>
              <Select
                value={formData.caffeine_level}
                onValueChange={(value) => setFormData({ ...formData, caffeine_level: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="None">None</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Medium-High">Medium-High</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-sm p-6 shadow-elegant space-y-4">
          <h2 className="font-display text-xl text-foreground mb-4">Brewing Instructions</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Temperature
              </label>
              <Input
                value={formData.brewing_temp}
                onChange={(e) => setFormData({ ...formData, brewing_temp: e.target.value })}
                placeholder="95°C / 203°F"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Steep Time
              </label>
              <Input
                value={formData.brewing_time}
                onChange={(e) => setFormData({ ...formData, brewing_time: e.target.value })}
                placeholder="3-4 minutes"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Amount
              </label>
              <Input
                value={formData.brewing_amount}
                onChange={(e) => setFormData({ ...formData, brewing_amount: e.target.value })}
                placeholder="1 tsp per cup"
              />
            </div>
          </div>
        </div>

        <div className="bg-card rounded-sm p-6 shadow-elegant">
          <h2 className="font-display text-xl text-foreground mb-4">Status</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-foreground">In Stock</p>
                <p className="font-body text-xs text-muted-foreground">
                  Product is available for purchase
                </p>
              </div>
              <Switch
                checked={formData.in_stock}
                onCheckedChange={(checked) => setFormData({ ...formData, in_stock: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-foreground">Featured</p>
                <p className="font-body text-xs text-muted-foreground">
                  Show on homepage featured section
                </p>
              </div>
              <Switch
                checked={formData.featured}
                onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-body"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {product ? "Update Product" : "Create Product"}
          </Button>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
