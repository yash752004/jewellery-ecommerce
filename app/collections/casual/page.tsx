import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { Gem, ArrowLeft, Coffee, Sun, Moon, Zap, Sparkles } from "lucide-react"

export default function CasualCollectionPage() {
  // Filter products for casual collection
  const casualProducts = products.filter((p) => p.category === "Earrings" || p.name.includes("Chain"))

  const casualStory = {
    title: "Everyday Elegance",
    subtitle: "Jewelry for Your Daily Adventures",
    description:
      "Life is beautiful in its everyday moments. Our Casual Collection features versatile, comfortable pieces that effortlessly elevate your daily style, from morning coffee to evening strolls.",
    occasions: [
      {
        name: "Work & Office",
        description: "Professional yet stylish pieces",
        icon: Coffee,
        time: "9 AM - 5 PM",
      },
      {
        name: "Daytime Casual",
        description: "Perfect for errands and lunch dates",
        icon: Sun,
        time: "Morning - Afternoon",
      },
      {
        name: "Evening Out",
        description: "Transition seamlessly to dinner",
        icon: Moon,
        time: "Evening",
      },
      {
        name: "Weekend Vibes",
        description: "Relaxed yet put-together",
        icon: Zap,
        time: "Anytime",
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
      <section className="relative py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 mb-4">
                  <Coffee className="h-3 w-3 mr-1" />
                  Casual Collection
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{casualStory.title}</h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">{casualStory.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                  <Sparkles className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Versatile</h3>
                  <p className="text-sm text-gray-600">Day to night styling</p>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                  <Zap className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Comfortable</h3>
                  <p className="text-sm text-gray-600">All-day wear</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  Shop Collection
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  Styling Guide
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                {/* Time-based styling showcase */}
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 p-4 flex flex-col items-center justify-center">
                    <Sun className="h-8 w-8 text-teal-600 mb-2" />
                    <span className="text-xs font-medium text-teal-700">Morning</span>
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                    <Image
                      src={casualProducts[0]?.images[0] || "/placeholder.svg"}
                      alt="Morning style"
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 p-4 flex flex-col items-center justify-center">
                    <Coffee className="h-8 w-8 text-teal-600 mb-2" />
                    <span className="text-xs font-medium text-teal-700">Work</span>
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                    <Image
                      src={casualProducts[1]?.images[0] || "/placeholder.svg"}
                      alt="Work style"
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 p-4 flex flex-col items-center justify-center">
                    <Moon className="h-8 w-8 text-teal-600 mb-2" />
                    <span className="text-xs font-medium text-teal-700">Evening</span>
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                    <Image
                      src={casualProducts[2]?.images[0] || "/placeholder.svg"}
                      alt="Evening style"
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for Every Occasion</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our casual collection seamlessly transitions from your morning routine to evening plans, ensuring you
              always look effortlessly elegant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {casualStory.occasions.map((occasion, index) => {
              const IconComponent = occasion.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-cyan-50"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{occasion.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{occasion.description}</p>
                    <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                      {occasion.time}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Styling Tips */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Styling Made Simple</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn how to style our casual pieces for maximum impact and versatility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Layering Basics",
                description: "Mix different chain lengths for a trendy layered look",
                tip: "Start with a choker, add a medium chain, finish with a long pendant",
              },
              {
                title: "Mix & Match",
                description: "Combine different metals and textures confidently",
                tip: "Gold and silver together create a modern, eclectic style",
              },
              {
                title: "Day to Night",
                description: "Transform your look with simple additions",
                tip: "Add statement earrings to elevate your daytime jewelry",
              },
            ].map((tip, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600 mb-4">{tip.description}</p>
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <p className="text-sm text-teal-700 font-medium">💡 Pro Tip: {tip.tip}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Casual Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover all the versatile pieces in our casual collection, perfect for everyday elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {casualProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {casualProducts.length === 0 && (
            <div className="text-center py-12">
              <Coffee className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">More casual pieces coming soon!</h3>
              <p className="text-gray-500">We're adding more versatile jewelry to this collection.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Elevate Your Everyday Style</h2>
            <p className="text-teal-100 mb-8 text-lg">
              Ready to discover jewelry that works as hard as you do? Browse our complete casual collection or get
              personalized styling advice from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-teal-50">
                Personal Styling Session
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Download Style Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
