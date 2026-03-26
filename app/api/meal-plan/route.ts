import Anthropic from "@anthropic-ai/sdk"
import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY!,
    })

    // 🔥 STEP 1: Generate meal plan
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1500,
      messages: [
        {
          role: "user",
          content: `Generate a 7-day meal plan based on:
          Budget: ${body.budget}
          Preferences: ${body.preferences}
          Goal: ${body.goal}
          
          Return ONLY a valid JSON object. No conversational text.`,
        },
      ],
    })

    // 🔥 STEP 2: Extract text from Claude SAFELY (Fixes Vercel Error)
    let mealPlanText = ""
    const firstContentBlock = response.content[0]

    if (firstContentBlock && firstContentBlock.type === 'text') {
      mealPlanText = firstContentBlock.text
    } else {
      throw new Error("No text content returned from AI")
    }

    // 🔥 STEP 3: SAVE TO SUPABASE
    const { error } = await supabase.from("meal_plans").insert([
      {
        budget: body.budget,
        preferences: body.preferences,
        goal: body.goal,
        plan: mealPlanText,
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
    }

    // 🔥 STEP 4: Return response to frontend
    return Response.json({
      result: mealPlanText,
    })

  } catch (error) {
    console.error("API ERROR:", error)

    return Response.json(
      { error: "Failed to generate meal plan" },
      { status: 500 }
    )
  }
}