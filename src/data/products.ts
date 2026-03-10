export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  badge?: string;
  description: string;
  details: string[];
  brewingInstructions: {
    temperature: string;
    time: string;
    amount: string;
  };
  rating: number;
  reviews: number;
  inStock: boolean;
  weight: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Earl Grey Supreme",
    slug: "earl-grey-supreme",
    category: "Black Tea",
    categorySlug: "black-tea",
    price: 24.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=800",
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800",
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800",
    ],
    badge: "Best Seller",
    description: "A sophisticated blend of premium Ceylon black tea infused with the finest Italian bergamot oil. Our Earl Grey Supreme delivers a perfectly balanced cup with citrusy notes and a smooth, malty finish.",
    details: [
      "Origin: Nuwara Eliya, Sri Lanka",
      "Grade: FBOP (Flowery Broken Orange Pekoe)",
      "Caffeine Level: Medium-High",
      "Certified Organic",
    ],
    brewingInstructions: {
      temperature: "95°C / 203°F",
      time: "3-4 minutes",
      amount: "1 tsp per cup",
    },
    rating: 4.9,
    reviews: 234,
    inStock: true,
    weight: "100g",
  },
  {
    id: 2,
    name: "Jasmine Dragon Pearl",
    slug: "jasmine-dragon-pearl",
    category: "Green Tea",
    categorySlug: "green-tea",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=800",
      "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=800",
    ],
    badge: "New",
    description: "Hand-rolled pearls of premium green tea delicately scented with fresh jasmine blossoms. Watch them unfurl gracefully as they release their enchanting floral aroma.",
    details: [
      "Origin: Fujian Province, China",
      "Grade: Premium Hand-Rolled",
      "Caffeine Level: Low-Medium",
      "Multiple Infusions",
    ],
    brewingInstructions: {
      temperature: "80°C / 176°F",
      time: "2-3 minutes",
      amount: "3-4 pearls per cup",
    },
    rating: 4.8,
    reviews: 156,
    inStock: true,
    weight: "75g",
  },
  {
    id: 3,
    name: "Ceylon Breakfast",
    slug: "ceylon-breakfast",
    category: "Black Tea",
    categorySlug: "black-tea",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=800",
    ],
    description: "A robust and full-bodied morning tea that delivers a rich, malty flavor with hints of caramel. Perfect with milk and sugar for the classic British experience.",
    details: [
      "Origin: Dimbula, Sri Lanka",
      "Grade: BOP (Broken Orange Pekoe)",
      "Caffeine Level: High",
      "Perfect with Milk",
    ],
    brewingInstructions: {
      temperature: "100°C / 212°F",
      time: "4-5 minutes",
      amount: "1 tsp per cup",
    },
    rating: 4.7,
    reviews: 312,
    inStock: true,
    weight: "100g",
  },
  {
    id: 4,
    name: "Chamomile Dreams",
    slug: "chamomile-dreams",
    category: "Herbal Tea",
    categorySlug: "herbal-tea",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800",
    ],
    description: "Pure Egyptian chamomile flowers harvested at peak bloom for maximum relaxation benefits. A gentle, honey-sweet infusion perfect for unwinding before bedtime.",
    details: [
      "Origin: Nile Valley, Egypt",
      "Type: Whole Flowers",
      "Caffeine Level: None",
      "Sleep & Relaxation",
    ],
    brewingInstructions: {
      temperature: "100°C / 212°F",
      time: "5-7 minutes",
      amount: "1 tbsp per cup",
    },
    rating: 4.9,
    reviews: 189,
    inStock: true,
    weight: "50g",
  },
  {
    id: 5,
    name: "Oolong Imperial",
    slug: "oolong-imperial",
    category: "Oolong Tea",
    categorySlug: "oolong-tea",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=800",
    ],
    badge: "Premium",
    description: "A masterfully crafted oolong tea with complex layers of honey, orchid, and roasted nuts. This partially oxidized tea offers a unique experience between green and black tea.",
    details: [
      "Origin: Alishan, Taiwan",
      "Oxidation: 30-40%",
      "Caffeine Level: Medium",
      "Gongfu Style Recommended",
    ],
    brewingInstructions: {
      temperature: "90°C / 194°F",
      time: "3-4 minutes",
      amount: "1.5 tsp per cup",
    },
    rating: 4.9,
    reviews: 98,
    inStock: true,
    weight: "100g",
  },
  {
    id: 6,
    name: "White Peony",
    slug: "white-peony",
    category: "White Tea",
    categorySlug: "white-tea",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800",
    ],
    description: "Delicate silver needle buds and young leaves create a subtle, sweet infusion with notes of melon and fresh hay. The least processed tea for maximum antioxidants.",
    details: [
      "Origin: Fujian, China",
      "Grade: Bai Mu Dan",
      "Caffeine Level: Low",
      "High Antioxidants",
    ],
    brewingInstructions: {
      temperature: "75°C / 167°F",
      time: "4-5 minutes",
      amount: "2 tsp per cup",
    },
    rating: 4.8,
    reviews: 76,
    inStock: true,
    weight: "50g",
  },
  {
    id: 7,
    name: "Masala Chai Blend",
    slug: "masala-chai-blend",
    category: "Spiced Tea",
    categorySlug: "spiced-tea",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=800",
    ],
    description: "An authentic Indian recipe blending robust Assam tea with cardamom, cinnamon, ginger, cloves, and black pepper. Perfect for creating a creamy, spiced chai latte.",
    details: [
      "Origin: Assam, India",
      "Blend: Traditional Spices",
      "Caffeine Level: Medium-High",
      "Ideal with Milk",
    ],
    brewingInstructions: {
      temperature: "100°C / 212°F",
      time: "5 minutes",
      amount: "1.5 tsp per cup",
    },
    rating: 4.8,
    reviews: 267,
    inStock: true,
    weight: "100g",
  },
  {
    id: 8,
    name: "Luxury Gift Box",
    slug: "luxury-gift-box",
    category: "Gift Sets",
    categorySlug: "gift-sets",
    price: 89.99,
    originalPrice: 110.00,
    image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=800",
    ],
    badge: "Sale",
    description: "An exquisite gift set featuring six of our finest teas in a beautifully crafted wooden box. Includes Earl Grey Supreme, Jasmine Dragon Pearl, Ceylon Breakfast, and more.",
    details: [
      "Contains 6 Premium Teas",
      "Handcrafted Wooden Box",
      "Gift Card Included",
      "Free Gift Wrapping",
    ],
    brewingInstructions: {
      temperature: "Varies by tea",
      time: "See individual packets",
      amount: "As directed",
    },
    rating: 5.0,
    reviews: 145,
    inStock: true,
    weight: "300g total",
  },
  {
    id: 9,
    name: "Peppermint Fresh",
    slug: "peppermint-fresh",
    category: "Herbal Tea",
    categorySlug: "herbal-tea",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800",
    ],
    description: "Crisp and cooling peppermint leaves that deliver an invigorating, refreshing cup. Perfect after meals to aid digestion or as a caffeine-free pick-me-up.",
    details: [
      "Origin: Oregon, USA",
      "Type: Whole Leaves",
      "Caffeine Level: None",
      "Digestive Benefits",
    ],
    brewingInstructions: {
      temperature: "100°C / 212°F",
      time: "5-7 minutes",
      amount: "1 tbsp per cup",
    },
    rating: 4.7,
    reviews: 203,
    inStock: true,
    weight: "50g",
  },
  {
    id: 10,
    name: "Golden Yunnan",
    slug: "golden-yunnan",
    category: "Black Tea",
    categorySlug: "black-tea",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800",
    ],
    description: "Rare golden-tipped black tea from China's Yunnan province. Features a smooth, honey-like sweetness with notes of cocoa and a subtle peppery finish.",
    details: [
      "Origin: Yunnan, China",
      "Grade: Golden Tips",
      "Caffeine Level: Medium-High",
      "Single Origin",
    ],
    brewingInstructions: {
      temperature: "90°C / 194°F",
      time: "3-4 minutes",
      amount: "1 tsp per cup",
    },
    rating: 4.9,
    reviews: 87,
    inStock: true,
    weight: "75g",
  },
  {
    id: 11,
    name: "Sencha Reserve",
    slug: "sencha-reserve",
    category: "Green Tea",
    categorySlug: "green-tea",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=800",
    ],
    description: "First-flush Japanese sencha with a vibrant green color and grassy, umami-rich flavor. A refreshing daily tea that embodies the essence of Japanese tea culture.",
    details: [
      "Origin: Shizuoka, Japan",
      "Harvest: First Flush",
      "Caffeine Level: Medium",
      "High in L-Theanine",
    ],
    brewingInstructions: {
      temperature: "70°C / 158°F",
      time: "1-2 minutes",
      amount: "1 tsp per cup",
    },
    rating: 4.8,
    reviews: 134,
    inStock: true,
    weight: "100g",
  },
  {
    id: 12,
    name: "Christmas Spice",
    slug: "christmas-spice",
    category: "Seasonal",
    categorySlug: "seasonal",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800",
    ],
    badge: "Limited Edition",
    description: "A festive blend of black tea with cinnamon, orange peel, cloves, and vanilla. Captures the warmth and joy of the holiday season in every sip.",
    details: [
      "Seasonal Limited Edition",
      "Blend: Holiday Spices",
      "Caffeine Level: Medium",
      "Perfect for Gifting",
    ],
    brewingInstructions: {
      temperature: "95°C / 203°F",
      time: "4-5 minutes",
      amount: "1 tsp per cup",
    },
    rating: 4.9,
    reviews: 56,
    inStock: true,
    weight: "100g",
  },
];

export const categories = [
  { name: "All", slug: "all", count: products.length },
  { name: "Black Tea", slug: "black-tea", count: products.filter(p => p.categorySlug === "black-tea").length },
  { name: "Green Tea", slug: "green-tea", count: products.filter(p => p.categorySlug === "green-tea").length },
  { name: "Herbal Tea", slug: "herbal-tea", count: products.filter(p => p.categorySlug === "herbal-tea").length },
  { name: "Oolong Tea", slug: "oolong-tea", count: products.filter(p => p.categorySlug === "oolong-tea").length },
  { name: "White Tea", slug: "white-tea", count: products.filter(p => p.categorySlug === "white-tea").length },
  { name: "Spiced Tea", slug: "spiced-tea", count: products.filter(p => p.categorySlug === "spiced-tea").length },
  { name: "Gift Sets", slug: "gift-sets", count: products.filter(p => p.categorySlug === "gift-sets").length },
  { name: "Seasonal", slug: "seasonal", count: products.filter(p => p.categorySlug === "seasonal").length },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  if (categorySlug === "all") return products;
  return products.filter(p => p.categorySlug === categorySlug);
};
