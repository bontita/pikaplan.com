import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
})

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

    const { action } = await request.json()

    if (!["cancel", "reactivate"].includes(action)) {
      return NextResponse.json(
        { error: "Invalid action. Must be 'cancel' or 'reactivate'" },
        { status: 400 }
      )
    }

    // Get user's active subscription
    const subscription = await prisma.subscription.findFirst({
      where: {
        userId,
        status: "ACTIVE",
      },
    })

    if (!subscription) {
      return NextResponse.json(
        { error: "No active subscription found" },
        { status: 404 }
      )
    }

    if (action === "cancel") {
      // Cancel subscription at period end
      await stripe.subscriptions.update(subscription.stripeSubscriptionId, {
        cancel_at_period_end: true,
      })

      // Update database
      await prisma.subscription.update({
        where: { id: subscription.id },
        data: { cancelAtPeriodEnd: true },
      })

      return NextResponse.json({
        message: "Subscription will be canceled at the end of the current period",
        cancelAtPeriodEnd: true,
      })
    } else if (action === "reactivate") {
      // Reactivate subscription
      await stripe.subscriptions.update(subscription.stripeSubscriptionId, {
        cancel_at_period_end: false,
      })

      // Update database
      await prisma.subscription.update({
        where: { id: subscription.id },
        data: { cancelAtPeriodEnd: false },
      })

      return NextResponse.json({
        message: "Subscription reactivated successfully",
        cancelAtPeriodEnd: false,
      })
    }

  } catch (error) {
    console.error("Subscription management error:", error)
    return NextResponse.json(
      { error: "Failed to manage subscription" },
      { status: 500 }
    )
  }
}