import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Brewing the Perfect Cup",
    excerpt: "Discover the secrets to extracting maximum flavor from your favorite tea leaves with our expert brewing guide.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600",
    date: "December 15, 2024",
    category: "Brewing Tips",
  },
  {
    id: 2,
    title: "Health Benefits of Ceylon Tea",
    excerpt: "From antioxidants to improved heart health, explore the science-backed benefits of drinking Ceylon tea daily.",
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=600",
    date: "December 10, 2024",
    category: "Health & Wellness",
  },
  {
    id: 3,
    title: "A Journey Through Sri Lanka's Tea Gardens",
    excerpt: "Join us on a virtual tour of the misty highlands where our premium teas are carefully cultivated and harvested.",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=600",
    date: "December 5, 2024",
    category: "Tea Culture",
  },
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">
              From Our Journal
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Latest Stories
            </h2>
          </div>
          <Link
            to="/blog"
            className="mt-4 md:mt-0 inline-flex items-center font-body text-sm uppercase tracking-wider text-foreground hover:text-accent transition-colors group"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-sm mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-3">
                <span className="font-body text-xs uppercase tracking-wider text-accent">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <Link to={`/blog/${post.id}`}>
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
              </Link>

              {/* Excerpt */}
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
