import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPosts, blogCategories } from "@/data/blogPosts";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Our Journal</h1>
          <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto">
            Stories, brewing guides, and insights from the world of tea
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Featured Post */}
        <Link
          to={`/blog/${featuredPost.slug}`}
          className="group block mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-sm">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="inline-block font-body text-sm uppercase tracking-wider text-accent mb-3">
                Featured
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 group-hover:text-accent transition-colors">
                {featuredPost.title}
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <div className="flex items-center text-accent font-body text-sm uppercase tracking-wider mt-6">
                <span>Read Article</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </Link>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 font-body text-sm rounded-sm transition-colors ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <article
              key={post.id}
              className="group animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-sm mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="flex items-center gap-4 mb-3">
                <span className="font-body text-xs uppercase tracking-wider text-accent">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>

              <Link to={`/blog/${post.slug}`}>
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
              </Link>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-body text-sm text-foreground">{post.author.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{post.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
