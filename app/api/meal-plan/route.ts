import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const preferences = await request.json();

    const mockGeneratedPlan = {
      id: Date.now(),
      totalCost: Math.floor(Math.random() * 2200) + 1200,
      totalMeals: (preferences.days || 7) * 3,
      groceryList: [
        { item: 'Chicken breast', quantity: '1.5 kg', cost: 450 },
        { item: 'Rice', quantity: '2 kg', cost: 240 },
        { item: 'Vegetables (mixed)', quantity: '2 kg', cost: 300 },
        { item: 'Spices & herbs', quantity: '500g', cost: 150 },
        { item: 'Cooking oil', quantity: '1L', cost: 200 },
        { item: 'Milk', quantity: '2L', cost: 180 },
        { item: 'Bread', quantity: '1 loaf', cost: 120 }
      ],
      meals: [
        {
          day: 'Monday',
          breakfast: { name: `${preferences.cuisine || 'Mixed'} Breakfast Bowl`, cost: 45, calories: 320 },
          lunch: { name: `${preferences.cuisine || 'Mixed'} Power Salad`, cost: 120, calories: 450 },
          dinner: { name: `${preferences.cuisine || 'Mixed'} Healthy Stew`, cost: 95, calories: 380 }
        },
        {
          day: 'Tuesday',
          breakfast: { name: 'Greek Yogurt Parfait', cost: 55, calories: 280 },
          lunch: { name: 'Grilled Protein Plate', cost: 135, calories: 420 },
          dinner: { name: 'Veggie Pasta', cost: 85, calories: 410 }
        },
        {
          day: 'Wednesday',
          breakfast: { name: 'Avocado Toast', cost: 65, calories: 350 },
          lunch: { name: 'Quinoa Bowl', cost: 95, calories: 380 },
          dinner: { name: 'Lean Grilled Chicken', cost: 110, calories: 400 }
        }
      ]
    };

    return NextResponse.json({ success: true, plan: mockGeneratedPlan });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Could not generate meal plan.' }, { status: 500 });
  }
}
