import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { collections } from "@/data/collections";

const Collections = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Our Collections</h1>
          <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our carefully curated tea collections, each offering a unique journey through flavors and traditions
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.slug}`}
              className="group relative overflow-hidden rounded-sm aspect-[16/10] animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${collection.image}')` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="font-body text-xs uppercase tracking-wider text-cream/70 mb-2">
                  {collection.productCount} Products
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-cream mb-2">
                  {collection.name}
                </h2>
                <p className="font-body text-cream/80 mb-4 max-w-md">
                  {collection.description}
                </p>
                <div className="flex items-center text-accent font-body text-sm uppercase tracking-wider">
                  <span>Explore Collection</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
