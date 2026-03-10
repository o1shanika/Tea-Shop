import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Black Tea",
    description: "Bold & Robust",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=500",
    count: "24 Products",
  },
  {
    id: 2,
    name: "Green Tea",
    description: "Fresh & Delicate",
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=500",
    count: "18 Products",
  },
  {
    id: 3,
    name: "Gift Sets",
    description: "Perfect Presents",
    image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=500",
    count: "12 Products",
  },
  {
    id: 4,
    name: "Herbal Infusions",
    description: "Naturally Soothing",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=500",
    count: "15 Products",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">
            Curated Selection
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Our Collections
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections, each offering a unique tea experience 
            that captures the essence of Ceylon's finest estates.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group relative overflow-hidden rounded-sm aspect-[3/4] animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${collection.image}')` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="font-body text-xs uppercase tracking-wider text-cream/70 mb-1">
                  {collection.count}
                </span>
                <h3 className="font-display text-2xl text-cream mb-1">
                  {collection.name}
                </h3>
                <p className="font-body text-sm text-cream/80 mb-4">
                  {collection.description}
                </p>
                <div className="flex items-center text-accent font-body text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Shop Now</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
