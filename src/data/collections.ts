export interface Collection {
  id: number;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  bannerImage: string;
  productCount: number;
}

export const collections: Collection[] = [
  {
    id: 1,
    name: "Black Tea",
    slug: "black-tea",
    description: "Bold & Robust",
    longDescription: "Discover our exquisite range of black teas, from the misty highlands of Ceylon to the rolling hills of Assam. Each blend offers a full-bodied experience with rich, malty notes and a satisfying depth of flavor.",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=500",
    bannerImage: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1920",
    productCount: 24,
  },
  {
    id: 2,
    name: "Green Tea",
    slug: "green-tea",
    description: "Fresh & Delicate",
    longDescription: "Experience the delicate artistry of our green tea collection. From Japanese sencha to Chinese Dragon Well, each tea offers a refreshing journey through grassy, vegetal, and subtly sweet flavor profiles.",
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=500",
    bannerImage: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=1920",
    productCount: 18,
  },
  {
    id: 3,
    name: "Gift Sets",
    slug: "gift-sets",
    description: "Perfect Presents",
    longDescription: "Celebrate special moments with our beautifully curated gift sets. Each collection is thoughtfully assembled in elegant packaging, making them ideal presents for tea lovers and newcomers alike.",
    image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=500",
    bannerImage: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=1920",
    productCount: 12,
  },
  {
    id: 4,
    name: "Herbal Infusions",
    slug: "herbal-tea",
    description: "Naturally Soothing",
    longDescription: "Embrace the healing power of nature with our caffeine-free herbal infusions. From calming chamomile to invigorating peppermint, discover blends that nurture both body and soul.",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=500",
    bannerImage: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1920",
    productCount: 15,
  },
  {
    id: 5,
    name: "Oolong Tea",
    slug: "oolong-tea",
    description: "Complex & Nuanced",
    longDescription: "Journey into the sophisticated world of oolong teas. These partially oxidized treasures bridge the gap between green and black tea, offering complex layers of flavor from floral to roasted.",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=500",
    bannerImage: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=1920",
    productCount: 8,
  },
  {
    id: 6,
    name: "White Tea",
    slug: "white-tea",
    description: "Pure & Elegant",
    longDescription: "Indulge in the most delicate of all teas. Our white tea collection features minimally processed leaves that deliver subtle sweetness and exceptional antioxidant benefits.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=500",
    bannerImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1920",
    productCount: 6,
  },
  {
    id: 7,
    name: "Seasonal Collection",
    slug: "seasonal",
    description: "Limited Edition",
    longDescription: "Celebrate the seasons with our exclusive limited-edition blends. From festive holiday spices to refreshing summer infusions, each collection captures the essence of the moment.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=500",
    bannerImage: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1920",
    productCount: 10,
  },
  {
    id: 8,
    name: "Spiced Tea",
    slug: "spiced-tea",
    description: "Warm & Aromatic",
    longDescription: "Warm your soul with our aromatic spiced tea collection. Traditional chai blends and creative spice combinations create comforting cups perfect for any time of day.",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=500",
    bannerImage: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1920",
    productCount: 7,
  },
];

export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find(c => c.slug === slug);
};
