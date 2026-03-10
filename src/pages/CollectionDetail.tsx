import { useParams, Link } from "react-router-dom";
import { ShoppingBag, Heart, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { getCollectionBySlug } from "@/data/collections";
import { getProductsByCategory } from "@/data/products";

const CollectionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const collection = getCollectionBySlug(slug || "");
  const products = getProductsByCategory(slug || "");

  if (!collection) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-4xl mb-4">Collection Not Found</h1>
          <Link to="/collections" className="text-accent hover:underline">
            Return to Collections
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url('${collection.bannerImage}')` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-sm text-cream/70 mb-6">
            <Link to="/" className="hover:text-cream">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/collections" className="hover:text-cream">Collections</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-cream">{collection.name}</span>
          </nav>
          <h1 className="font-display text-5xl md:text-7xl text-cream mb-4">
            {collection.name}
          </h1>
          <p className="font-body text-cream/80 max-w-2xl mx-auto">
            {collection.longDescription}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <p className="font-body text-muted-foreground">
            {products.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-sm overflow-hidden shadow-elegant animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Link to={`/product/${product.slug}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                
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

                <button className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">
                  <Heart className="h-4 w-4 text-foreground" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body uppercase tracking-wider text-sm">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
                <Link to={`/product/${product.slug}`}>
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

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-muted-foreground">No products found in this collection.</p>
            <Link to="/shop" className="text-accent hover:underline mt-4 inline-block">
              Browse All Products
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CollectionDetail;
