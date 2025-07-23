import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { products, getProductById, type Product } from "@/lib/products"

export async function POST(request: NextRequest) {
  try {
    const { productId, category, material, price } = await request.json()

    // Get current product details
    const currentProduct = getProductById(productId)
    if (!currentProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    // 🆕 Add right after the "if (!currentProduct)" block

    // --- Early exit if no OpenAI key is configured -----------------------------
    const otherProducts = products.filter((p) => p.id !== productId)
    if (!process.env.OPENAI_API_KEY) {
      const fallbackRecommendations = otherProducts.slice(0, 3)

      return NextResponse.json({
        recommendations: fallbackRecommendations,
        reasoning: "Showing popular complementary pieces (AI disabled - no OPENAI_API_KEY set).",
      })
    }
    // ---------------------------------------------------------------------------

    // Filter out the current product and get potential recommendations
    // const otherProducts = products.filter((p) => p.id !== productId)

    // Use AI to analyze and recommend products
    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: `You are an expert jewelry consultant with deep knowledge of jewelry styles, materials, and customer preferences. Your task is to recommend complementary jewelry pieces based on the customer's current selection.

Consider these factors when making recommendations:
1. Style compatibility (classic, modern, vintage, etc.)
2. Material harmony (gold tones, silver tones, mixed metals)
3. Occasion appropriateness
4. Price range compatibility
5. Layering and stacking potential
6. Seasonal trends

Provide exactly 3 product IDs from the available products that would complement the customer's selection, along with a brief reasoning for your recommendations.`,
      prompt: `Current product selection:
- Name: ${currentProduct.name}
- Category: ${currentProduct.category}
- Material: ${currentProduct.material}
- Price: $${currentProduct.price}
- Description: ${currentProduct.description}

Available products to recommend from:
${otherProducts.map((p) => `ID: ${p.id}, Name: ${p.name}, Category: ${p.category}, Material: ${p.material}, Price: $${p.price}`).join("\n")}

Please recommend exactly 3 products that would complement this selection. Respond in this format:
RECOMMENDATIONS: [id1, id2, id3]
REASONING: [Your explanation for why these products work well together]`,
    })

    // Parse the AI response
    const recommendationMatch = text.match(/RECOMMENDATIONS:\s*\[(.*?)\]/)
    const reasoningMatch = text.match(/REASONING:\s*(.*)/s)

    if (!recommendationMatch) {
      // Fallback to simple category-based recommendations
      const fallbackRecommendations = otherProducts
        .filter((p) => p.category !== category || Math.abs(p.price - price) < price * 0.5)
        .slice(0, 3)

      return NextResponse.json({
        recommendations: fallbackRecommendations,
        reasoning: "Selected based on complementary categories and similar price range.",
      })
    }

    const recommendedIds = recommendationMatch[1].split(",").map((id) => id.trim().replace(/['"]/g, ""))

    const recommendedProducts = recommendedIds.map((id) => getProductById(id)).filter(Boolean) as Product[]

    const reasoning = reasoningMatch
      ? reasoningMatch[1].trim()
      : "AI-curated selection based on style compatibility and customer preferences."

    return NextResponse.json({
      recommendations: recommendedProducts.slice(0, 3),
      reasoning,
    })
  } catch (error) {
    console.error("Error generating recommendations:", error)

    // Fallback recommendations
    const fallbackRecommendations = products.filter((p) => p.id !== request.body?.productId).slice(0, 3)

    return NextResponse.json({
      recommendations: fallbackRecommendations,
      reasoning: "Curated selection of our most popular pieces.",
    })
  }
}
