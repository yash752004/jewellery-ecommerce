import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/products"
import { Heart, Crown, Coffee, ArrowRight, Sparkles } from "lucide-react"

export function CollectionsShowcase() {
  // Simulate different collections by categorizing existing products
  const collections = [
    {
      id: "siblings-bond",
      title: "Siblings Bond",
      subtitle: "Matching Jewelry Sets",
      description:
        "Celebrate the unbreakable bond between siblings with our matching jewelry pieces designed to symbolize eternal connection.",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      textColor: "text-pink-600",
      products: products.filter((p) => p.category === "Bracelets" || p.category === "Necklaces").slice(0, 4),
      featured: products.find((p) => p.category === "Bracelets"),
      href: "/collections/siblings-bond",
    },
    {
      id: "wedding-collection",
      title: "Wedding Collection",
      subtitle: "Bridal Elegance",
      description:
        "Timeless pieces crafted for your most precious moments. From engagement rings to wedding bands, make your special day unforgettable.",
      icon: Crown,
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      textColor: "text-amber-600",
      products: products.filter((p) => p.category === "Rings" || p.name.includes("Diamond")).slice(0, 4),
      featured: products.find((p) => p.name.includes("Diamond")),
      href: "/collections/wedding",
    },
    {
      id: "casual-collection",
      title: "Casual Collection",
      subtitle: "Everyday Elegance",
      description:
        "Effortlessly chic pieces perfect for daily wear. Elevate your everyday style with our comfortable yet sophisticated designs.",
      icon: Coffee,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
      textColor: "text-teal-600",
      products: products.filter((p) => p.category === "Earrings" || p.name.includes("Chain")).slice(0, 4),
      featured: products.find((p) => p.category === "Earrings"),
      href: "/collections/casual",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Curated Collections
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"> Style</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each collection tells a unique story, carefully curated to celebrate life's most meaningful moments and
            everyday beauty.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {collections.map((collection, index) => {
            const IconComponent = collection.icon
            return (
              <Card
                key={collection.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Collection Header */}
                <div className={`${collection.bgColor} p-8 relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 opacity-10">
                    <IconComponent className="h-24 w-24" />
                  </div>
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 ${collection.textColor} bg-white/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="mb-3 bg-white/80">
                      {collection.subtitle}
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{collection.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">{collection.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">{collection.products.length} pieces</span>
                      <Link href={collection.href}>
                        <Button size="sm" className={`bg-gradient-to-r ${collection.color} text-white hover:shadow-lg`}>
                          Explore
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Featured Product */}
                {collection.featured && (
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={collection.featured.images[0] || "/placeholder.svg"}
                          alt={collection.featured.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 line-clamp-1">{collection.featured.name}</h4>
                        <p className="text-sm text-gray-600 mb-1">{collection.featured.material}</p>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-emerald-600">
                            ${collection.featured.price.toLocaleString()}
                          </span>
                          {collection.featured.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              ${collection.featured.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>

        {/* Product Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {products.slice(0, 6).map((product, index) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <CardContent className="p-3">
                  <h4 className="font-medium text-sm line-clamp-1 mb-1">{product.name}</h4>
                  <p className="text-xs text-gray-600 mb-2">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-600 text-sm">${product.price.toLocaleString()}</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                      <span className="text-xs text-gray-500">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Create Something Unique</h3>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
                Can't find exactly what you're looking for? Our master jewelers can bring your vision to life with
                custom designs tailored just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50">
                  Start Custom Design
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  View All Collections
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
