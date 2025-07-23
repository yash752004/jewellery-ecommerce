import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Product } from "@/lib/products"

interface ProductSpecificationsProps {
  product: Product
}

export function ProductSpecifications({ product }: ProductSpecificationsProps) {
  const specifications = [
    { label: "Category", value: product.category },
    { label: "Material", value: product.material },
    { label: "Manufacturer", value: "Luxe Jewelry Co." },
    { label: "Warranty", value: "Lifetime" },
    { label: "Serial Number", value: `LJ${product.id.padStart(6, "0")}` },
    { label: "Ships From", value: "New York, USA" },
  ]

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Specifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specifications.map((spec, index) => (
            <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-600 font-medium">{spec.label}</span>
              <span className="text-gray-900">{spec.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
