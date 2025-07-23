import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getFeaturedProducts } from "@/lib/products"
import { Gem, Shield, Truck, Award } from "lucide-react"
import { PromotionalWidgets } from "@/components/promotional-widgets"
import { NewProductsCarousel } from "@/components/new-products-carousel"
import { CollectionsShowcase } from "@/components/collections-showcase"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gem className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold">Luxe Jewelry</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/collections/siblings-bond" className="text-muted-foreground hover:text-foreground transition-colors">
                Siblings
              </Link>
              <Link href="/collections/wedding" className="text-muted-foreground hover:text-foreground transition-colors">
                Wedding
              </Link>
              <Link href="/collections/casual" className="text-muted-foreground hover:text-foreground transition-colors">
                Casual
              </Link>
              {/* <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Bracelets
              </Link> */}
            </nav>
            <Button>Shop Now</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero_section.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-70"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              New Collection Available
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Timeless Elegance, <span className="text-primary">Crafted to Perfection</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our exquisite collection of handcrafted jewelry, where each piece tells a story of luxury and sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700">
                Explore Collection
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Custom Design
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Promotional Widgets */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <PromotionalWidgets />
        </div>
      </section>

      

      {/* New Products Carousel */}
      <NewProductsCarousel />

{/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Certified diamonds and precious metals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-sm text-muted-foreground">Comprehensive coverage on all pieces</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">Complimentary delivery worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gem className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">Expert Craftsmanship</h3>
              <p className="text-sm text-muted-foreground">Handcrafted by master jewelers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Showcase */}
      <CollectionsShowcase />

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay in Touch</h2>
            <p className="mb-8 opacity-90">
              Be the first to know about new collections, exclusive offers, and jewelry care tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gem className="h-6 w-6" />
                <span className="text-xl font-bold">Luxe Jewelry</span>
              </div>
              <p className="text-gray-400">Crafting timeless pieces that celebrate life's precious moments.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Rings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Necklaces
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Earrings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Bracelets
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Care Instructions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Luxe Jewelry. All rights reserved.</p>
          
          </div>
        </div>
      </footer>
    </div>
  )
}
