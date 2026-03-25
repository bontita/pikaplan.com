import { NextResponse } from "next/server"

const PLANS = [
  {
    id: "FREE",
    name: "Free Plan",
    price: 0,
    currency: "KES",
    interval: null,
    features: [
      "1 meal plan per month",
      "1 day meal planning",
      "2 servings per meal",
      "Basic Kenyan meal suggestions",
      "Limited customization"
    ],
    limitations: [
      "No premium features",
      "Limited meal variety",
      "No nutritional analysis"
    ]
  },
  {
    id: "DAILY",
    name: "Daily Plan",
    price: 14,
    currency: "KES",
    interval: "day",
    features: [
      "1 meal plan per day",
      "1 day meal planning",
      "4 servings per meal",
      "Premium Kenyan meal suggestions",
      "Basic nutritional analysis",
      "Recipe instructions"
    ],
    stripePriceId: "price_daily"
  },
  {
    id: "WEEKLY",
    name: "Weekly Plan",
    price: 99,
    currency: "KES",
    interval: "week",
    features: [
      "7 meal plans per week",
      "7 day meal planning",
      "4 servings per meal",
      "Advanced Kenyan meal suggestions",
      "Detailed nutritional analysis",
      "Complete recipes with ingredients",
      "Grocery list generation",
      "Cost optimization"
    ],
    stripePriceId: "price_weekly"
  },
  {
    id: "MONTHLY",
    name: "Monthly Plan",
    price: 199,
    currency: "KES",
    interval: "month",
    features: [
      "30 meal plans per month",
      "30 day meal planning",
      "6 servings per meal",
      "Expert Kenyan meal curation",
      "Comprehensive nutritional analysis",
      "Professional recipes",
      "Smart grocery planning",
      "Budget optimization",
      "Meal prep instructions"
    ],
    stripePriceId: "price_monthly"
  },
  {
    id: "ANNUAL",
    name: "Annual Plan",
    price: 2200,
    currency: "KES",
    interval: "year",
    features: [
      "365 meal plans per year",
      "30 day meal planning",
      "8 servings per meal",
      "Premium Kenyan meal expertise",
      "Advanced nutritional tracking",
      "Chef-level recipes",
      "AI-powered meal optimization",
      "Family meal planning",
      "Seasonal ingredient suggestions",
      "Priority support"
    ],
    stripePriceId: "price_annual"
  }
]

export async function GET() {
  try {
    return NextResponse.json({
      plans: PLANS,
      currency: "KES",
      currencySymbol: "KSh"
    })
  } catch (error) {
    console.error("Pricing API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch pricing information" },
      { status: 500 }
    )
  }
}