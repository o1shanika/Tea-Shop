import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "New York, USA",
    rating: 5,
    text: "The Earl Grey Supreme is absolutely divine. The bergamot flavor is perfectly balanced, and every cup feels like a moment of pure luxury. I've converted all my friends!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
  },
  {
    id: 2,
    name: "James Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "As a tea connoisseur, I'm incredibly picky about quality. Ceylon Tea's collection has exceeded my expectations. The freshness and complexity of flavors are unmatched.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "London, UK",
    rating: 5,
    text: "The gift box I ordered for my mother was beautifully presented. She was absolutely thrilled! The quality of both the teas and packaging speaks volumes about this brand.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">
            What Our Customers Say
          </span>
          <h2 className="font-display text-4xl md:text-5xl">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-sm p-8 animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/30" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-primary-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-display text-lg">{testimonial.name}</h4>
                  <p className="font-body text-sm text-primary-foreground/60">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
