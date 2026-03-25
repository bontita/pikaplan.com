import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    const userId = (session?.user as any)?.id

    if (!userId) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      )
    }

    // Get user with subscription and meal plan usage
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscriptions: {
          where: { status: "ACTIVE" },
          orderBy: { createdAt: "desc" },
          take: 1,
        },
        mealPlans: {
          select: {
            id: true,
            createdAt: true,
          },
          orderBy: { createdAt: "desc" },
        },
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    const currentSubscription = user.subscriptions[0]
    const mealPlanCount = user.mealPlans.length

    // Calculate usage limits based on plan
    const planLimits = {
      FREE: { mealPlans: 1, name: "Free Plan" },
      DAILY: { mealPlans: 1, name: "Daily Plan" },
      WEEKLY: { mealPlans: 7, name: "Weekly Plan" },
      MONTHLY: { mealPlans: 30, name: "Monthly Plan" },
      ANNUAL: { mealPlans: 365, name: "Annual Plan" },
    }

    const currentPlan = currentSubscription?.planType || "FREE"
    const limits = planLimits[currentPlan as keyof typeof planLimits]

    // Check if user can generate more meal plans
    const canGenerateMealPlan = mealPlanCount < limits.mealPlans

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        plan: currentPlan,
        planName: limits.name,
      },
      subscription: currentSubscription ? {
        id: currentSubscription.id,
        planType: currentSubscription.planType,
        status: currentSubscription.status,
        currentPeriodStart: currentSubscription.currentPeriodStart,
        currentPeriodEnd: currentSubscription.currentPeriodEnd,
        cancelAtPeriodEnd: currentSubscription.cancelAtPeriodEnd,
      } : null,
      usage: {
        mealPlansGenerated: mealPlanCount,
        mealPlansLimit: limits.mealPlans,
        canGenerateMealPlan,
      },
    })

  } catch (error) {
    console.error("Dashboard API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    )
  }
}