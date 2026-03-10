import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, ArrowRight, Tag } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Earl Grey Supreme",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=200",
      quantity: 2,
      category: "Black Tea",
    },
    {
      id: 2,
      name: "Jasmine Dragon Pearl",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=200",
      quantity: 1,
      category: "Green Tea",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Shopping Cart</h1>
          <p className="font-body text-muted-foreground mt-2">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/30 mb-6" />
            <h2 className="font-display text-2xl text-foreground mb-4">Your cart is empty</h2>
            <p className="font-body text-muted-foreground mb-8">
              Looks like you haven't added any teas to your cart yet.
            </p>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-body uppercase tracking-wider">
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-6 p-6 bg-card rounded-sm shadow-elegant"
                  >
                    <Link to={`/product/${item.id}`} className="shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-sm"
                      />
                    </Link>

                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                            {item.category}
                          </span>
                          <Link to={`/product/${item.id}`}>
                            <h3 className="font-display text-lg text-foreground hover:text-accent transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-border rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-10 text-center font-body text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <p className="font-display text-lg text-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="font-body text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-sm p-8 shadow-elegant sticky top-24">
                <h2 className="font-display text-2xl text-foreground mb-6">Order Summary</h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block font-body text-sm text-foreground mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <Input
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="bg-background"
                    />
                    <Button variant="outline" size="icon">
                      <Tag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Totals */}
                <div className="space-y-3 py-6 border-t border-b border-border">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <p className="font-body text-xs text-accent">
                      ✓ You qualify for free shipping!
                    </p>
                  )}
                </div>

                <div className="flex justify-between py-6">
                  <span className="font-display text-xl text-foreground">Total</span>
                  <span className="font-display text-xl text-foreground">${total.toFixed(2)}</span>
                </div>

                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body uppercase tracking-wider">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-body text-xs text-muted-foreground text-center">
                    Secure checkout powered by Stripe
                  </p>
                  <div className="flex justify-center gap-2 mt-3">
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-6 opacity-60" />
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Mastercard" className="h-6 opacity-60" />
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="Amex" className="h-6 opacity-60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
