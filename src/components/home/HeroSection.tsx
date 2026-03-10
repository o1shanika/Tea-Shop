import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-accent mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Premium Ceylon Tea
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            A Journey Through
            <br />
            <span className="text-accent italic">Exquisite</span> Flavors
          </h1>
          <p className="font-body text-cream/80 text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
            Discover our handpicked collection of the world's finest teas, 
            sourced from the pristine highlands of Sri Lanka. Each blend is a 
            testament to centuries of tea-making tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.8s" }}>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body uppercase tracking-wider group"
            >
              <Link to="/shop">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cream text-cream hover:bg-cream hover:text-foreground font-body uppercase tracking-wider"
            >
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
