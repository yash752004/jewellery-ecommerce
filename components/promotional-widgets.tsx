"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart } from "lucide-react"
import { products } from "@/lib/products"
import Image from "next/image"

export function PromotionalWidgets() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const featuredProducts = products.slice(0, 4)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentProductIndex((prev) => (prev + 1) % featuredProducts.length)
        setIsAnimating(false)
      }, 300)
    }, 2000)

    return () => clearInterval(interval)
  }, [featuredProducts.length])

  const currentProduct = featuredProducts[currentProductIndex]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
      {/* Customer Satisfaction Widget */}
      <Card className="bg-gradient-to-br from-purple-800 to-purple-900 text-white overflow-hidden relative">
        <CardContent className="p-8">
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-400" />
                <span className="text-sm font-medium text-pink-400">Customer Love</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">98.5% Satisfaction</h3>
                <p className="text-purple-100 text-sm leading-relaxed">
                  Over 10,000 happy customers trust our handcrafted jewelry. Join our family of satisfied clients.
                </p>
              </div>
              <Button size="sm" className="bg-pink-600 hover:bg-pink-700 text-white">
                Read Reviews
              </Button>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className="w-20 h-16 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-pink-400" />
                  </div>
                </div>
              </div>
              <div className="text-center mt-2">
                <div className="text-xs text-purple-200">10K+ Reviews</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Animated Product Showcase Widget */}
      <Card className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white overflow-hidden relative">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="space-y-4 flex-1">
              <div className="inline-block">
                <Badge className="bg-emerald-600 text-white text-xs font-medium">FEATURED</Badge>
              </div>
              <div
                className={`transition-all duration-300 ${isAnimating ? "opacity-0 transform translate-y-2" : "opacity-100 transform translate-y-0"}`}
              >
                <h3 className="text-xl font-bold mb-2 line-clamp-1">{currentProduct?.name}</h3>
                <p className="text-emerald-100 text-sm mb-2">${currentProduct?.price.toLocaleString()}</p>
                <p className="text-emerald-200 text-xs">{currentProduct?.material}</p>
              </div>
              <Button size="sm" className="bg-white text-emerald-900 hover:bg-emerald-50">
                Shop Now
              </Button>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div
                className={`w-20 h-20 relative transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
              >
                <div className="w-20 h-20 bg-emerald-600/20 rounded-full overflow-hidden border-2 border-emerald-400/30">
                  <Image
                    src={currentProduct?.images[0] || "/placeholder.svg"}
                    alt={currentProduct?.name || "Product"}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                {featuredProducts.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      index === currentProductIndex ? "bg-emerald-400" : "bg-emerald-600/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
