import { Leaf, Award, Truck, RefreshCcw } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "All our teas are certified organic, grown without pesticides or harmful chemicals.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Hand-selected leaves from the finest tea gardens in Sri Lanka's highlands.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary delivery on all orders over $50 within the continental US.",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "Not satisfied? Return within 30 days for a full refund, no questions asked.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">
            The Ceylon Difference
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Why Choose Us
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
