import { Link } from "react-router-dom";
import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Earl Grey Supreme",
    category: "Black Tea",
    price: 24.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=500",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Jasmine Dragon Pearl",
    category: "Green Tea",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=500",
    badge: "New",
  },
  {
    id: 3,
    name: "Ceylon Breakfast",
    category: "Black Tea",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=500",
  },
  {
    id: 4,
    name: "Chamomile Dreams",
    category: "Herbal Tea",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=500",
  },
  {
    id: 5,
    name: "Oolong Imperial",
    category: "Oolong Tea",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=500",
    badge: "Premium",
  },
  {
    id: 6,
    name: "White Peony",
    category: "White Tea",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=500",
  },
  {
    id: 7,
    name: "Masala Chai Blend",
    category: "Spiced Tea",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=500",
  },
  {
    id: 8,
    name: "Luxury Gift Box",
    category: "Gift Set",
    price: 89.99,
    originalPrice: 110.00,
    image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=500",
    badge: "Sale",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">
            Shop Our Selection
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Featured Products
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites that our customers love. Each tea is carefully sourced and 
            crafted to deliver an exceptional drinking experience.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-sm overflow-hidden shadow-elegant animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badge */}
                {product.badge && (
                  <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-body uppercase tracking-wider rounded-sm ${
                    product.badge === "Sale" 
                      ? "bg-destructive text-destructive-foreground" 
                      : product.badge === "New"
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {product.badge}
                  </span>
                )}

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">
                  <Heart className="h-4 w-4 text-foreground" />
                </button>

                {/* Quick Add Button */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body uppercase tracking-wider text-sm">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-display text-lg text-foreground mt-1 hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-body font-semibold text-foreground">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="font-body text-sm text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-body uppercase tracking-wider border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
