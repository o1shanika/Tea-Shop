import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-3xl md:text-4xl mb-4">Join Our Tea Journey</h3>
            <p className="font-body text-primary-foreground/80 mb-6">
              Subscribe to receive exclusive offers, brewing tips, and stories from the tea gardens.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-body uppercase tracking-wider">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="font-display text-3xl mb-4">
              <span className="text-accent">Ceylon</span> Tea
            </h2>
            <p className="font-body text-sm text-primary-foreground/80 mb-6 leading-relaxed">
              Experience the finest Ceylon tea, handpicked from the misty highlands of Sri Lanka. 
              Each cup tells a story of tradition, craftsmanship, and pure indulgence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Shop All", "New Arrivals", "Best Sellers", "Gift Sets", "Accessories"].map((link) => (
                <li key={link}>
                  <Link
                    to="/shop"
                    className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display text-xl mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {["Contact Us", "FAQs", "Shipping & Returns", "Track Order", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <Link
                    to="/contact"
                    className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl mb-4">Get in Touch</h4>
            <div className="space-y-3 font-body text-sm text-primary-foreground/80">
              <p>123 Tea Garden Lane</p>
              <p>Nuwara Eliya, Sri Lanka</p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@ceylontea.com
              </p>
              <p>+94 11 234 5678</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-primary-foreground/60">
              © {currentYear} Ceylon Tea. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-6 opacity-60" />
              <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Mastercard" className="h-6 opacity-60" />
              <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="Amex" className="h-6 opacity-60" />
              <img src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png" alt="PayPal" className="h-6 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
