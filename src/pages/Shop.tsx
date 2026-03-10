import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Filter, Grid, LayoutGrid, ChevronDown } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { products, categories, getProductsByCategory } from "@/data/products";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [gridCols, setGridCols] = useState(4);

  const filteredProducts = getProductsByCategory(selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Our Collection</h1>
          <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our curated selection of premium teas from the world's finest gardens
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-24">
              <h3 className="font-display text-xl mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <button
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`w-full text-left font-body text-sm py-2 px-3 rounded transition-colors ${
                        selectedCategory === category.slug
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {category.name}
                      <span className="float-right text-xs opacity-60">({category.count})</span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-display text-xl mb-4">Price Range</h3>
                <div className="space-y-2">
                  {["Under $20", "$20 - $30", "$30 - $50", "Over $50"].map((range) => (
                    <label key={range} className="flex items-center gap-2 font-body text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="rounded border-border" />
                      {range}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
              <p className="font-body text-sm text-muted-foreground">
                Showing {sortedProducts.length} products
              </p>

              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="font-body text-sm">
                      Sort by
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setSortBy("featured")}>Featured</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("price-low")}>Price: Low to High</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("price-high")}>Price: High to Low</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("name")}>Name: A to Z</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("rating")}>Highest Rated</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Grid Toggle */}
                <div className="hidden md:flex items-center gap-1">
                  <button
                    onClick={() => setGridCols(3)}
                    className={`p-2 rounded ${gridCols === 3 ? "bg-secondary" : "hover:bg-secondary/50"}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setGridCols(4)}
                    className={`p-2 rounded ${gridCols === 4 ? "bg-secondary" : "hover:bg-secondary/50"}`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-6`}>
              {sortedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-card rounded-sm overflow-hidden shadow-elegant animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Image Container */}
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

                  {/* Product Info */}
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
