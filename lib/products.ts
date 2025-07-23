export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  category: string
  material: string
  images: string[]
  inStock: boolean
  rating: number
  reviews: number
  features: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Elegant Diamond Solitaire Ring",
    price: 2499,
    originalPrice: 2999,
    description:
      "A timeless classic featuring a brilliant-cut diamond set in 18k white gold. This solitaire ring embodies elegance and sophistication, perfect for engagements or special occasions.",
    category: "Rings",
    material: "18k White Gold",
    images: [
      "/Elegant Diamond Solitaire Ring/1.jpg",
      "/Elegant Diamond Solitaire Ring/2.jpg",
      "/Elegant Diamond Solitaire Ring/3.jpg",
    ],
    inStock: true,
    rating: 4.9,
    reviews: 127,
    features: ["1.2 Carat Diamond", "18k White Gold Band", "Certified Diamond", "Lifetime Warranty"],
  },
  {
    id: "2",
    name: "Pearl Drop Earrings",
    price: 899,
    description:
      "Lustrous freshwater pearls suspended from delicate gold chains. These earrings add a touch of grace to any outfit.",
    category: "Earrings",
    material: "14k Yellow Gold",
    images: ["/Pearl Drop Earrings/1.jpg", "/Pearl Drop Earrings/2.jpg"],
    inStock: true,
    rating: 4.7,
    reviews: 89,
    features: ["Freshwater Pearls", "14k Gold Chain", "Hypoallergenic", "Gift Box Included"],
  },
  {
    id: "3",
    name: "Vintage Sapphire Necklace",
    price: 1799,
    originalPrice: 2199,
    description:
      "A stunning vintage-inspired necklace featuring deep blue sapphires surrounded by sparkling diamonds in an art deco design.",
    category: "Necklaces",
    material: "18k White Gold",
    images: ["/Vintage Sapphire Necklace/1.jpg", "/Vintage Sapphire Necklace/2.jpg"],
    inStock: true,
    rating: 4.8,
    reviews: 156,
    features: ["Natural Sapphires", "Diamond Accents", "Art Deco Design", "Adjustable Length"],
  },
  {
    id: "4",
    name: "Rose Gold Tennis Bracelet",
    price: 1299,
    description:
      "A classic tennis bracelet featuring brilliant diamonds set in warm rose gold. Perfect for everyday elegance.",
    category: "Bracelets",
    material: "14k Rose Gold",
    images: ["/Rose Gold Tennis Bracelet/1.jpg", "/Rose Gold Tennis Bracelet/2.jpg"],
    inStock: true,
    rating: 4.6,
    reviews: 203,
    features: ["2.5 Total Carat Weight", "14k Rose Gold", "Secure Clasp", "Professional Sizing"],
  },
  {
    id: "5",
    name: "Emerald Cut Engagement Ring",
    price: 3299,
    description:
      "A sophisticated emerald-cut diamond ring with baguette side stones, set in platinum for maximum brilliance.",
    category: "Rings",
    material: "Platinum",
    images: ["/Emerald Cut Engagement Ring/1.jpg", "/Emerald Cut Engagement Ring/2.jpg"],
    inStock: true,
    rating: 4.9,
    reviews: 94,
    features: ["2.0 Carat Center Stone", "Baguette Side Stones", "Platinum Setting", "GIA Certified"],
  },
  {
    id: "6",
    name: "Gold Chain Layering Set",
    price: 599,
    originalPrice: 799,
    description: "A set of three delicate gold chains in varying lengths, perfect for creating a layered look.",
    category: "Necklaces",
    material: "14k Yellow Gold",
    images: ["/Gold Chain Layering Set/1.jpg", "/Gold Chain Layering Set/2.jpg"],
    inStock: true,
    rating: 4.5,
    reviews: 312,
    features: ["Three Chain Lengths", "14k Gold", "Delicate Design", "Mix & Match"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 4)
}
