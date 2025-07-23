import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { Gem, ArrowLeft, Crown, Diamond, Heart, Star } from "lucide-react"

export default function WeddingCollectionPage() {
  // Filter products for wedding collection
  const weddingProducts = products.filter((p) => p.category === "Rings" || p.name.includes("Diamond"))

  const weddingStory = {
    title: "Forever Begins Here",
    subtitle: "Bridal Jewelry for Your Perfect Day",
    description:
      "Your wedding day marks the beginning of forever. Our Wedding Collection features exquisite pieces designed to make your special moments even more magical, from the proposal to the altar and beyond.",
    collections: [
      {
        name: "Engagement Rings",
        description: "The perfect symbol of your love story",
        icon: Diamond,
        count: weddingProducts.filter((p) => p.name.includes("Ring")).length,
      },
      {
        name: "Wedding Bands",
        description: "Eternal circles of commitment",
        icon: Heart,
        count: weddingProducts.filter((p) => p.category === "Rings").length,
      },
      {
        name: "Bridal Sets",
        description: "Perfectly matched for your big day",
        icon: Crown,
        count: 3,
      },
      {
        name: "Anniversary Pieces",
        description: "Celebrating years of love",
        icon: Star,
        count: 2,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Gem className="h-8 w-8 text-emerald-600" />
              <h1 className="text-2xl font-bold">Luxe Jewelry</h1>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 mb-4">
                  <Crown className="h-3 w-3 mr-1" />
                  Wedding Collection
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{weddingStory.title}</h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">{weddingStory.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {weddingStory.collections.slice(0, 2).map((collection, index) => {
                  const IconComponent = collection.icon
                  return (
                    <div key={index} className="text-center p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                      <IconComponent className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-gray-900 text-sm">{collection.name}</h3>
                      <p className="text-xs text-gray-600">{collection.count} pieces</p>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Browse Rings
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  Book Consultation
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 to-yellow-100 p-8">
                <div
                  className="absolute inset-0 opacity-60 bg-cover bg-center"
                  style={{ backgroundImage: `url('/wedding collection.jpg')` }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center mx-auto mb-6">
                      <Crown className="h-16 w-16 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Perfect Ring Awaits</h3>
                    <p className="text-white-600">Handcrafted with love and precision</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Collection Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wedding Jewelry Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From the moment you say "yes" to your golden anniversary, we have the perfect pieces for every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingStory.collections.map((collection, index) => {
              const IconComponent = collection.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-yellow-50"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{collection.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{collection.description}</p>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                      {collection.count} pieces
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Wedding Pieces</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most beloved wedding jewelry, each piece crafted to make your special day unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {weddingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {weddingProducts.length === 0 && (
            <div className="text-center py-12">
              <Crown className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Exquisite pieces coming soon!</h3>
              <p className="text-gray-500">We're adding more beautiful wedding jewelry to this collection.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Love Stories</h2>
            <p className="text-gray-600">Hear from couples who chose Luxe Jewelry for their special day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Michael",
                quote: "The perfect ring for our perfect day. The craftsmanship is absolutely stunning!",
                rating: 5,
              },
              {
                name: "Emma & James",
                quote: "From consultation to delivery, the experience was flawless. Highly recommend!",
                rating: 5,
              },
              {
                name: "Lisa & David",
                quote: "Our wedding bands are even more beautiful than we imagined. Thank you!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Begin Your Forever Story</h2>
            <p className="text-amber-100 mb-8 text-lg">
              Schedule a private consultation with our wedding jewelry experts to find or create the perfect pieces for
              your special day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-amber-50">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                View Ring Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
