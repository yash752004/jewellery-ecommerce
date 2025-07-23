import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { Gem, ArrowLeft, Heart, Users, Gift, Sparkles } from "lucide-react"

export default function SiblingsBondPage() {
  // Filter products for siblings collection
  const siblingProducts = products.filter((p) => p.category === "Bracelets" || p.category === "Necklaces")

  const collectionStory = {
    title: "The Bond That Never Breaks",
    subtitle: "Celebrating Sibling Love Through Jewelry",
    description:
      "Siblings share an unbreakable bond that transcends time and distance. Our Siblings Bond collection celebrates this special relationship with matching and complementary pieces designed to symbolize your eternal connection.",
    features: [
      "Matching sets for brothers and sisters",
      "Complementary designs that tell a story together",
      "Engravable pieces for personal messages",
      "Durable materials for everyday wear",
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
      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 mb-4">
                  <Heart className="h-3 w-3 mr-1" />
                  Siblings Bond Collection
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{collectionStory.title}</h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">{collectionStory.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                  <Users className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Matching Sets</h3>
                  <p className="text-sm text-gray-600">Perfect pairs for siblings</p>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                  <Gift className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Gift Ready</h3>
                  <p className="text-sm text-gray-600">Beautiful packaging included</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                  Shop Collection
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  Custom Engraving
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {siblingProducts.slice(0, 4).map((product, index) => (
                  <div key={product.id} className={`relative ${index % 2 === 0 ? "mt-8" : ""} group cursor-pointer`}>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 left-4 right-4 bg-white rounded-xl p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h4 className="font-semibold text-sm line-clamp-1">{product.name}</h4>
                      <p className="text-pink-600 font-bold text-sm">${product.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{collectionStory.subtitle}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Every piece in our Siblings Bond collection is crafted with the understanding that sibling relationships
              are among life's most precious gifts. Whether you're celebrating a milestone, expressing gratitude, or
              simply showing love, these pieces create lasting memories.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collectionStory.features.map((feature, index) => (
                <div key={index} className="p-4 bg-pink-50 rounded-xl">
                  <Sparkles className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover all the beautiful pieces in our Siblings Bond collection, each designed to celebrate the special
              connection between brothers and sisters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {siblingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {siblingProducts.length === 0 && (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">More pieces coming soon!</h3>
              <p className="text-gray-500">We're adding more beautiful sibling jewelry to this collection.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Create Your Own Sibling Story</h2>
            <p className="text-pink-100 mb-8 text-lg">
              Can't find the perfect match? Our designers can create custom pieces that perfectly capture your unique
              sibling bond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-pink-50">
                Custom Design Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Contact Our Designers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
