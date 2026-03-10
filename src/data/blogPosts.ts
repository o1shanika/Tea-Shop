export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Brewing the Perfect Cup",
    slug: "art-of-brewing-perfect-cup",
    excerpt: "Discover the secrets to extracting maximum flavor from your favorite tea leaves with our expert brewing guide.",
    content: `
      <p>There's something magical about brewing the perfect cup of tea. It's not just about steeping leaves in hot water—it's an art form that has been refined over centuries. In this guide, we'll share the secrets that tea masters use to extract maximum flavor from every leaf.</p>

      <h2>Water Quality Matters</h2>
      <p>The foundation of great tea starts with great water. Always use fresh, filtered water for brewing. Avoid distilled water, as the minerals in natural water help develop the tea's flavor. If your tap water has a strong chlorine taste, consider using a filter or letting it sit uncovered overnight.</p>

      <h2>Temperature is Key</h2>
      <p>Different teas require different temperatures. Black teas thrive at near-boiling temperatures (95-100°C), while delicate green and white teas prefer cooler water (70-80°C). Using water that's too hot can scald the leaves, resulting in bitter, astringent flavors.</p>

      <h2>Timing Your Steep</h2>
      <p>Over-steeping is the most common mistake tea drinkers make. Start with these guidelines:</p>
      <ul>
        <li>Black tea: 3-5 minutes</li>
        <li>Green tea: 2-3 minutes</li>
        <li>White tea: 4-5 minutes</li>
        <li>Oolong: 3-4 minutes</li>
        <li>Herbal: 5-7 minutes</li>
      </ul>

      <h2>The Perfect Ratio</h2>
      <p>Generally, use about 1 teaspoon of loose leaf tea per 8 ounces of water. Adjust based on your preference—more tea for a stronger cup, less for something lighter.</p>

      <h2>Warm Your Teapot</h2>
      <p>Before brewing, rinse your teapot or cup with hot water. This preheating ensures your tea stays at the optimal temperature throughout steeping.</p>

      <p>Remember, these are guidelines, not rules. The best cup of tea is the one you enjoy most. Experiment, taste, and discover what works for you.</p>
    `,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1200",
    date: "December 15, 2024",
    category: "Brewing Tips",
    author: {
      name: "Eleanor Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
      role: "Tea Master",
    },
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Health Benefits of Ceylon Tea",
    slug: "health-benefits-ceylon-tea",
    excerpt: "From antioxidants to improved heart health, explore the science-backed benefits of drinking Ceylon tea daily.",
    content: `
      <p>Ceylon tea, grown in the misty highlands of Sri Lanka, has been treasured for centuries not just for its exceptional flavor, but for its remarkable health benefits. Modern science is now confirming what traditional medicine has known for generations.</p>

      <h2>Rich in Antioxidants</h2>
      <p>Ceylon tea is packed with polyphenols, particularly catechins and theaflavins, which are powerful antioxidants. These compounds help neutralize harmful free radicals in your body, potentially reducing the risk of chronic diseases and slowing the aging process.</p>

      <h2>Heart Health</h2>
      <p>Regular consumption of Ceylon tea has been linked to improved cardiovascular health. Studies suggest it may help:</p>
      <ul>
        <li>Lower LDL cholesterol levels</li>
        <li>Reduce blood pressure</li>
        <li>Improve blood vessel function</li>
        <li>Decrease inflammation</li>
      </ul>

      <h2>Metabolism Boost</h2>
      <p>The combination of caffeine and catechins in Ceylon tea can help boost your metabolism. Some research indicates that drinking 3-4 cups daily may help with weight management when combined with a healthy diet and exercise.</p>

      <h2>Mental Clarity</h2>
      <p>Ceylon tea contains L-theanine, an amino acid that promotes relaxation without drowsiness. Combined with caffeine, it provides a smooth, sustained energy boost without the jitters associated with coffee.</p>

      <h2>Immune Support</h2>
      <p>The antimicrobial properties of tea polyphenols may help support your immune system. Some studies suggest regular tea drinking may help reduce the frequency of common illnesses.</p>

      <p>While tea offers many benefits, it's not a miracle cure. Enjoy it as part of a balanced lifestyle for optimal health.</p>
    `,
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=1200",
    date: "December 10, 2024",
    category: "Health & Wellness",
    author: {
      name: "Dr. Sarah Williams",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
      role: "Nutritionist",
    },
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "A Journey Through Sri Lanka's Tea Gardens",
    slug: "journey-sri-lanka-tea-gardens",
    excerpt: "Join us on a virtual tour of the misty highlands where our premium teas are carefully cultivated and harvested.",
    content: `
      <p>Sri Lanka's tea country is a place of breathtaking beauty. Rolling hills blanketed in emerald green, punctuated by colonial-era factories and dotted with workers in colorful saris carefully plucking the youngest leaves. Join us on a journey through this magical landscape.</p>

      <h2>The Highlands of Nuwara Eliya</h2>
      <p>At 6,000 feet above sea level, Nuwara Eliya produces some of the world's most prized teas. The cool climate, misty mornings, and rich soil create perfect conditions for growing delicate, champagne-toned teas with exceptional clarity and flavor.</p>

      <h2>The Art of Plucking</h2>
      <p>Tea plucking is an art passed down through generations. Skilled workers—mostly women—traverse the steep hillsides, selecting only the top two leaves and a bud from each shoot. This "fine plucking" ensures the highest quality tea.</p>

      <h2>From Leaf to Cup</h2>
      <p>After plucking, the leaves undergo a carefully controlled process:</p>
      <ul>
        <li><strong>Withering:</strong> Leaves lose moisture on long troughs</li>
        <li><strong>Rolling:</strong> Breaking down cell walls to release essential oils</li>
        <li><strong>Oxidation:</strong> Controlled exposure to air develops flavor</li>
        <li><strong>Drying:</strong> Halting oxidation and preserving the tea</li>
        <li><strong>Grading:</strong> Sorting by size and quality</li>
      </ul>

      <h2>A Legacy of Excellence</h2>
      <p>Ceylon tea has been cultivated since the 1860s when a devastating coffee blight led planters to experiment with tea. Today, Sri Lanka is one of the world's top tea exporters, known for teas that are "bright, brisk, and beautiful."</p>

      <p>Every cup of Ceylon tea carries with it the dedication of countless workers and centuries of tradition. It's more than a beverage—it's a connection to a remarkable land and its people.</p>
    `,
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=1200",
    date: "December 5, 2024",
    category: "Tea Culture",
    author: {
      name: "James Morrison",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
      role: "Travel Writer",
    },
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Rise of Afternoon Tea Culture",
    slug: "rise-afternoon-tea-culture",
    excerpt: "Explore the elegant tradition of afternoon tea and how to recreate this quintessentially British experience at home.",
    content: `
      <p>The tradition of afternoon tea is one of Britain's most enduring contributions to world culture. What began as a private indulgence has evolved into an elegant social ritual enjoyed around the globe.</p>

      <h2>Origins of a Tradition</h2>
      <p>Credit for afternoon tea goes to Anna, the 7th Duchess of Bedford, in the 1840s. Finding herself hungry between lunch and the fashionably late dinner hour of 8 PM, she began requesting tea and light refreshments in her private quarters. Soon, she was inviting friends to join her.</p>

      <h2>The Essential Elements</h2>
      <p>A proper afternoon tea includes:</p>
      <ul>
        <li><strong>The Tea:</strong> Traditionally a robust black tea like Earl Grey or Assam</li>
        <li><strong>Finger Sandwiches:</strong> Cucumber, smoked salmon, egg salad, and ham</li>
        <li><strong>Scones:</strong> Served with clotted cream and jam</li>
        <li><strong>Pastries:</strong> An assortment of petit fours and cakes</li>
      </ul>

      <h2>Hosting at Home</h2>
      <p>You don't need a grand hotel to enjoy afternoon tea. Set a beautiful table with your finest china, brew a pot of quality loose-leaf tea, and prepare simple but elegant bites. The key is in the presentation and the pleasure of unhurried conversation.</p>

      <p>Afternoon tea is more than a meal—it's a moment of gracious living in our busy world.</p>
    `,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1200",
    date: "November 28, 2024",
    category: "Tea Culture",
    author: {
      name: "Victoria Hayes",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
      role: "Food Writer",
    },
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Tea and Mindfulness: A Natural Pairing",
    slug: "tea-mindfulness-natural-pairing",
    excerpt: "Learn how the simple act of preparing and drinking tea can become a powerful mindfulness practice.",
    content: `
      <p>In our fast-paced world, finding moments of peace can feel impossible. Yet there's a simple practice that has been connecting people to the present moment for thousands of years: drinking tea.</p>

      <h2>The Zen of Tea</h2>
      <p>Japanese tea ceremony, or Chado, translates to "the way of tea." It's not just about the beverage—it's a moving meditation that emphasizes harmony, respect, purity, and tranquility. While you may not perform a full ceremony, you can bring these principles to your daily tea ritual.</p>

      <h2>Creating Your Practice</h2>
      <p>Transform your tea break into a mindfulness moment:</p>
      <ul>
        <li>Put away your phone and other distractions</li>
        <li>Focus on each step: boiling water, measuring leaves, watching them unfurl</li>
        <li>Engage all your senses: the sound of pouring water, the rising steam, the aroma</li>
        <li>Take your first sip slowly, truly tasting the tea</li>
        <li>Notice your thoughts without judgment, returning focus to the tea</li>
      </ul>

      <h2>The Benefits</h2>
      <p>This simple practice can reduce stress, improve focus, and create small moments of joy throughout your day. It's not about perfection—it's about presence.</p>
    `,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1200",
    date: "November 20, 2024",
    category: "Wellness",
    author: {
      name: "Maya Patel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
      role: "Wellness Coach",
    },
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Holiday Tea Recipes to Warm Your Soul",
    slug: "holiday-tea-recipes",
    excerpt: "Festive tea-based drinks and treats that will make your holiday gatherings memorable.",
    content: `
      <p>The holidays are a time for warmth, togetherness, and delicious treats. These tea-based recipes will add a special touch to your celebrations.</p>

      <h2>Spiced Chai Hot Chocolate</h2>
      <p>Combine the comfort of hot chocolate with the warming spices of chai:</p>
      <ul>
        <li>Brew strong chai tea</li>
        <li>Whisk in high-quality cocoa powder</li>
        <li>Add steamed milk and a touch of honey</li>
        <li>Top with whipped cream and cinnamon</li>
      </ul>

      <h2>Earl Grey Shortbread</h2>
      <p>Infuse classic shortbread with the bergamot flavor of Earl Grey:</p>
      <ul>
        <li>Grind Earl Grey leaves into butter</li>
        <li>Mix with flour, sugar, and salt</li>
        <li>Chill, slice, and bake until golden</li>
        <li>Dip in white chocolate for extra elegance</li>
      </ul>

      <h2>Cranberry Tea Punch</h2>
      <p>A festive punch perfect for holiday parties:</p>
      <ul>
        <li>Brew hibiscus tea and chill</li>
        <li>Mix with cranberry juice and orange juice</li>
        <li>Add sparkling water just before serving</li>
        <li>Garnish with fresh cranberries and rosemary</li>
      </ul>

      <p>These recipes prove that tea is not just for drinking—it's a versatile ingredient that can elevate any holiday creation.</p>
    `,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200",
    date: "November 15, 2024",
    category: "Recipes",
    author: {
      name: "Chef Marcus Lee",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
      role: "Culinary Director",
    },
    readTime: "6 min read",
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const blogCategories = [
  "All",
  "Brewing Tips",
  "Health & Wellness",
  "Tea Culture",
  "Wellness",
  "Recipes",
];
