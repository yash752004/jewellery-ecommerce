import { Shield, RotateCcw, CheckCircle } from "lucide-react"

export function GuaranteeBadges() {
  const guarantees = [
    {
      icon: CheckCircle,
      title: "100% Authentic",
      description: "Certified genuine diamonds and precious metals with authenticity guarantee",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      icon: RotateCcw,
      title: "30 Days Return",
      description: "Easy returns and exchanges within 30 days of purchase",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "Comprehensive lifetime warranty covering manufacturing defects",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {guarantees.map((guarantee, index) => {
        const IconComponent = guarantee.icon
        return (
          <div key={index} className="text-center p-4">
            <div
              className={`w-12 h-12 ${guarantee.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}
            >
              <IconComponent className={`h-6 w-6 ${guarantee.color}`} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{guarantee.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{guarantee.description}</p>
          </div>
        )
      })}
    </div>
  )
}
