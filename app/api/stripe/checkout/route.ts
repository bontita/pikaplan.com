import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
})

const PLAN_PRICES = {
  DAILY: { priceId: "price_daily", amount: 14 },
  WEEKLY: { priceId: "price_weekly", amount: 99 },
  MONTHLY: { priceId: "price_monthly", amount: 199 },
  ANNUAL: { priceId: "price_annual", amount: 2200 },
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    const userId = (session?.user as any)?.id
    if (!userId) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      )
    }

    const { planType } = await request.json()

    if (!PLAN_PRICES[planType as keyof typeof PLAN_PRICES]) {
      return NextResponse.json(
        { error: "Invalid plan type" },
        { status: 400 }
      )
    }

    const plan = PLAN_PRICES[planType as keyof typeof PLAN_PRICES]

    // Get or create Stripe customer
    let customerId: string

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { stripeCustomerId: true, email: true, name: true }
    })

    if (user?.stripeCustomerId) {
      customerId = user.stripeCustomerId
    } else {
      const customer = await stripe.customers.create({
        email: user?.email,
        name: user?.name,
        metadata: {
          userId,
        }
      })
      customerId = customer.id

      // Update user with Stripe customer ID
      await prisma.user.update({
        where: { id: userId },
        data: { stripeCustomerId: customerId }
      })
    }

    // Create checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "kes",
            product_data: {
              name: `${planType} Meal Plan`,
              description: `Access to ${planType.toLowerCase()} meal planning features`,
            },
            unit_amount: plan.amount * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: planType === "ANNUAL" ? "payment" : "subscription",
      success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXTAUTH_URL}/pricing?canceled=true`,
      metadata: {
        userId,
        plan: planType,
      },
    })

    return NextResponse.json({
      url: checkoutSession.url,
      sessionId: checkoutSession.id
    })

  } catch (error) {
    console.error("Stripe checkout error:", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}