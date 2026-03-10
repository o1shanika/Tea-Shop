import { Leaf, Award, Users, Globe } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We partner with tea gardens that practice organic farming and protect local ecosystems for future generations.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Every batch is meticulously tested and curated by our tea masters to ensure exceptional flavor and freshness.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We invest in the communities where our teas are grown, supporting education and healthcare initiatives.",
  },
  {
    icon: Globe,
    title: "Authenticity",
    description: "We source directly from origin, maintaining transparent relationships with farmers and preserving traditional methods.",
  },
];

const timeline = [
  { year: "1867", event: "Tea cultivation begins in Ceylon's highlands" },
  { year: "1920", event: "Our family's first tea estate established" },
  { year: "1985", event: "Organic certification achieved" },
  { year: "2010", event: "Ceylon Tea brand launched globally" },
  { year: "2024", event: "Serving tea lovers in over 50 countries" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative py-32 md:py-48 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Our Story
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-cream mb-6">
            A Legacy of Excellence
          </h1>
          <p className="font-body text-cream/80 text-lg max-w-2xl mx-auto">
            For over a century, we've been dedicated to bringing the world's finest Ceylon tea 
            from our family estates to your cup.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">
                Our Heritage
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                From the Misty Highlands of Sri Lanka
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Nestled 6,000 feet above sea level in the pristine highlands of Nuwara Eliya, 
                  our tea gardens have been cultivating some of the world's most exceptional teas 
                  for over a century.
                </p>
                <p>
                  What began as a single family estate has grown into a beloved global brand, 
                  yet our commitment to quality remains unchanged. Every leaf is still hand-picked 
                  by skilled workers who understand that great tea requires patience, expertise, 
                  and an unwavering dedication to tradition.
                </p>
                <p>
                  Today, Ceylon Tea brings this heritage to discerning tea lovers worldwide, 
                  offering a curated collection that represents the very best of Sri Lankan 
                  tea craftsmanship.
                </p>
              </div>
              <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 font-body uppercase tracking-wider">
                <Link to="/shop">Explore Our Teas</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800"
                alt="Tea Garden"
                className="rounded-sm shadow-elegant"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">
              What We Stand For
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-sm shadow-elegant animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              A Timeline of Tradition
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-8 mb-8 last:mb-0 animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 shrink-0 text-right">
                  <span className="font-display text-2xl text-accent">{item.year}</span>
                </div>
                <div className="relative flex-1 pb-8 border-l-2 border-border pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 -translate-x-[7px] rounded-full bg-accent" />
                  <p className="font-body text-muted-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Meet the Experts
          </h2>
          <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto mb-12">
            Our team of tea masters, sommeliers, and passionate enthusiasts work tirelessly 
            to bring you the finest teas from around the world.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Eleanor Chen", role: "Head Tea Master", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300" },
              { name: "James Morrison", role: "Chief Curator", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300" },
              { name: "Maya Patel", role: "Quality Director", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-accent"
                />
                <h3 className="font-display text-xl">{member.name}</h3>
                <p className="font-body text-sm text-primary-foreground/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
