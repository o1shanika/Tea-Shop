import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-4xl mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-accent hover:underline">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 font-body text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{post.title}</span>
        </nav>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4">
        <div className="aspect-[21/9] overflow-hidden rounded-sm">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
            <span className="font-body uppercase tracking-wider text-accent">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-border">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-display text-lg text-foreground">{post.author.name}</p>
              <p className="font-body text-sm text-muted-foreground">{post.author.role}</p>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none font-body text-muted-foreground
              prose-headings:font-display prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-li:my-2
              prose-strong:text-foreground
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="font-body text-sm text-muted-foreground mb-4">Share this article</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Back to Blog */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mt-8 font-body text-sm uppercase tracking-wider text-accent hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl text-center mb-10">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group"
                >
                  <div className="overflow-hidden rounded-sm mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-2">
                    {post.date}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
