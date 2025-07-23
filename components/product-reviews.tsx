"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp } from "lucide-react"
import type { Product } from "@/lib/products"
import { WriteReviewDialog } from "./write-review-dialog"

interface ProductReviewsProps {
  product: Product
}

interface Review {
  id: string
  author: string
  avatar: string
  rating: number
  date: string
  verified: boolean
  content: string
  helpful: number
  images?: string[]
}

export function ProductReviews({ product }: ProductReviewsProps) {
  const [activeTab, setActiveTab] = useState("reviews")

  const reviews: Review[] = [
    {
      id: "1",
      author: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-01-15",
      verified: true,
      content:
        "Absolutely stunning piece! The craftsmanship is exceptional and it arrived beautifully packaged. The diamond sparkles brilliantly and the setting is perfect.",
      helpful: 23,
      images: ["/placeholder.svg?height=100&width=100"],
    },
    {
      id: "2",
      author: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "2024-01-10",
      verified: true,
      content:
        "Great quality jewelry. The gold is beautiful and the design is elegant. Shipping was fast and customer service was helpful.",
      helpful: 18,
    },
    {
      id: "3",
      author: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-01-05",
      verified: true,
      content:
        "This exceeded my expectations! The attention to detail is remarkable and it's even more beautiful in person. Highly recommend!",
      helpful: 31,
    },
  ]

  const ratingBreakdown = [
    { stars: 5, count: 2630, percentage: 65 },
    { stars: 4, count: 849, percentage: 21 },
    { stars: 3, count: 698, percentage: 17 },
    { stars: 2, count: 312, percentage: 8 },
    { stars: 1, count: 195, percentage: 5 },
  ]

  const averageRating = product.rating
  const totalReviews = product.reviews

  return (
    <Card className="mt-8">
      <CardHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({totalReviews})</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="description" className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Product Details</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>

              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Rating Summary */}
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    {averageRating}
                    <span className="text-2xl text-gray-500">/5</span>
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">({totalReviews.toLocaleString()} reviews)</p>
                </div>

                <div className="space-y-2">
                  {ratingBreakdown.map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-2 text-sm">
                      <span className="w-6 text-right">{rating.stars}</span>
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: `${rating.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-600 w-12 text-right">{rating.count}</span>
                    </div>
                  ))}
                </div>

                <WriteReviewDialog product={product} />
              </div>

              {/* Reviews List */}
              <div className="lg:col-span-2 space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.author} />
                        <AvatarFallback>
                          {review.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{review.author}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
                              Verified Purchase
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>

                        <p className="text-gray-700 leading-relaxed">{review.content}</p>

                        {review.images && (
                          <div className="flex gap-2 mt-3">
                            {review.images.map((image, index) => (
                              <img
                                key={index}
                                src={image || "/placeholder.svg"}
                                alt={`Review image ${index + 1}`}
                                className="w-16 h-16 object-cover rounded-md border"
                              />
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-4 pt-2">
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful ({review.helpful})
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
