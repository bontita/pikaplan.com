'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import { ChefHat, Clock, Users, DollarSign, ShoppingCart, Download, RefreshCw } from 'lucide-react';

/**
 * Meal Generator Page
 */
export default function Generator() {
  const [preferences, setPreferences] = useState({
    mealType: 'balanced',
    dietaryRestrictions: [] as string[],
    budget: 'medium',
    servings: 2,
    days: 7,
    cuisine: 'mixed'
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handlePreferenceChange = (key: string, value: any) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleDietaryRestrictionChange = (restriction: string, checked: boolean) => {
    setPreferences(prev => ({
      ...prev,
      dietaryRestrictions: checked
        ? [...prev.dietaryRestrictions, restriction]
        : prev.dietaryRestrictions.filter(r => r !== restriction)
    }));
  };

  const generateMealPlan = async () => {
    setIsGenerating(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/meal-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preferences)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setGeneratedPlan(data.plan);
      } else {
        throw new Error(data.error || 'Unable to fetch meal plan');
      }
    } catch (error) {
      console.error('Meal plan fetch failed:', error);
      setErrorMessage('Could not fetch meal plan. Please try again.');

      // Fallback to local mock plan if needed
      const fallbackPlan = {
        id: Date.now(),
        totalCost: Math.floor(Math.random() * 2000) + 1500,
        totalMeals: preferences.days * 3,
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
            breakfast: { name: 'Oatmeal with Fruits', cost: 45, calories: 320 },
            lunch: { name: 'Chicken Stir Fry', cost: 120, calories: 450 },
            dinner: { name: 'Vegetable Curry', cost: 95, calories: 380 }
          },
          {
            day: 'Tuesday',
            breakfast: { name: 'Greek Yogurt Parfait', cost: 55, calories: 280 },
            lunch: { name: 'Fish with Vegetables', cost: 135, calories: 420 },
            dinner: { name: 'Pasta Primavera', cost: 85, calories: 410 }
          },
          {
            day: 'Wednesday',
            breakfast: { name: 'Avocado Toast', cost: 65, calories: 350 },
            lunch: { name: 'Quinoa Salad', cost: 95, calories: 380 },
            dinner: { name: 'Grilled Chicken', cost: 110, calories: 400 }
          }
        ]
      };

      setGeneratedPlan(fallbackPlan);
    } finally {
      setIsGenerating(false);
    }
  };

  const regeneratePlan = () => {
    setGeneratedPlan(null);
    generateMealPlan();
  };

  return (
    <main className="flex flex-col min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-orange-50 to-transparent dark:from-green-950/20 dark:via-orange-950/10 dark:to-transparent pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <ChefHat className="w-16 h-16 text-green-600 dark:text-green-400 mb-6" />
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Generate Your <span className="bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">Meal Plan</span>
            </h1>
            <p className="font-inter text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
              This section collects your meal goals and constraints, then fetches a tailored meal schedule from our plan engine. Start with your preferences and the right plan will appear in the preview below.
            </p>
          </div>
        </Container>
      </section>

      {/* Generator Form */}
      {!generatedPlan && (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 md:p-12 shadow-lg">
                <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Customize Your Plan
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Meal Type */}
                  <div>
                    <label className="block font-inter text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Meal Focus
                    </label>
                    <select
                      value={preferences.mealType}
                      onChange={(e) => handlePreferenceChange('mealType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    >
                      <option value="balanced">Balanced Nutrition</option>
                      <option value="weight-loss">Weight Loss</option>
                      <option value="muscle-gain">Muscle Gain</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="keto">Keto</option>
                    </select>
                  </div>

                  {/* Cuisine */}
                  <div>
                    <label className="block font-inter text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Cuisine Preference
                    </label>
                    <select
                      value={preferences.cuisine}
                      onChange={(e) => handlePreferenceChange('cuisine', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    >
                      <option value="mixed">Mixed Cuisine</option>
                      <option value="african">African</option>
                      <option value="mediterranean">Mediterranean</option>
                      <option value="asian">Asian</option>
                      <option value="italian">Italian</option>
                      <option value="mexican">Mexican</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block font-inter text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Budget Range
                    </label>
                    <select
                      value={preferences.budget}
                      onChange={(e) => handlePreferenceChange('budget', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    >
                      <option value="low">Budget Friendly (Under 1000 KES/day)</option>
                      <option value="medium">Moderate (1000-2000 KES/day)</option>
                      <option value="high">Premium (2000+ KES/day)</option>
                    </select>
                  </div>

                  {/* Days */}
                  <div>
                    <label className="block font-inter text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Number of Days
                    </label>
                    <select
                      value={preferences.days}
                      onChange={(e) => handlePreferenceChange('days', parseInt(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    >
                      <option value={1}>1 Day</option>
                      <option value={3}>3 Days</option>
                      <option value={7}>7 Days</option>
                      <option value={14}>14 Days</option>
                      <option value={30}>30 Days</option>
                    </select>
                  </div>

                  {/* Servings */}
                  <div>
                    <label className="block font-inter text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Number of People
                    </label>
                    <select
                      value={preferences.servings}
                      onChange={(e) => handlePreferenceChange('servings', parseInt(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    >
                      <option value={1}>1 Person</option>
                      <option value={2}>2 People</option>
                      <option value={3}>3 People</option>
                      <option value={4}>4 People</option>
                      <option value={5}>5+ People</option>
                    </select>
                  </div>

                  {/* Dietary Restrictions */}
                  <div className="md:col-span-2">
                    <label className="block font-inter text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Dietary Restrictions (Optional)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Gluten-free', 'Dairy-free', 'Nut-free', 'Low-carb', 'Halal', 'Kosher'].map((restriction) => (
                        <label key={restriction} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={preferences.dietaryRestrictions.includes(restriction)}
                            onChange={(e) => handleDietaryRestrictionChange(restriction, e.target.checked)}
                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <span className="font-inter text-sm text-gray-700 dark:text-gray-300">
                            {restriction}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {errorMessage && (
                  <p className="text-red-600 dark:text-red-400 font-inter text-sm mb-4 text-center">
                    {errorMessage}
                  </p>
                )}
                <div className="mt-8 text-center">
                  <button
                    onClick={generateMealPlan}
                    disabled={isGenerating}
                    className="px-12 py-4 font-inter font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 mx-auto"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Generating Your Plan...
                      </>
                    ) : (
                      <>
                        <ChefHat className="w-6 h-6" />
                        Generate Meal Plan
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Generated Plan Display */}
      {generatedPlan && (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-900 transition-colors duration-300">
          <Container>
            <div className="max-w-6xl mx-auto">
              {/* Plan Header */}
              <div className="mb-8 text-center">
                <p className="font-inter text-sm uppercase tracking-widest text-green-600 dark:text-green-400 mb-2">
                  Meal Plan Preview
                </p>
                <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Your Fetched Weekly Plan
                </h2>
                <p className="font-inter text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
                  This section shows the plan returned from the API based on your settings. Use "Regenerate" to refresh results or adjust preferences for a new plan.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Your Personalized Meal Plan
                    </h2>
                    <p className="font-inter text-gray-600 dark:text-gray-300">
                      {preferences.days} days • {preferences.servings} people • {preferences.mealType} focus
                    </p>
                  </div>
                  <button
                    onClick={regeneratePlan}
                    className="px-4 py-2 font-inter text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors flex items-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Regenerate
                  </button>
                </div>

                {/* Plan Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="font-poppins text-2xl font-bold text-gray-900 dark:text-white">
                      {generatedPlan.totalCost} KES
                    </p>
                    <p className="font-inter text-sm text-gray-600 dark:text-gray-300">
                      Total Cost
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <ChefHat className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <p className="font-poppins text-2xl font-bold text-gray-900 dark:text-white">
                      {generatedPlan.totalMeals}
                    </p>
                    <p className="font-inter text-sm text-gray-600 dark:text-gray-300">
                      Total Meals
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="font-poppins text-2xl font-bold text-gray-900 dark:text-white">
                      {preferences.days}
                    </p>
                    <p className="font-inter text-sm text-gray-600 dark:text-gray-300">
                      Days Covered
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Meal Plan */}
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
                    <h3 className="font-poppins text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Daily Meal Plan
                    </h3>
                    <div className="space-y-6">
                      {generatedPlan.meals.map((day: any, index: number) => (
                        <div key={index} className="border-b border-gray-200 dark:border-gray-600 pb-6 last:border-b-0 last:pb-0">
                          <h4 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            {day.day}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                              <p className="font-inter text-sm font-medium text-green-600 dark:text-green-400 mb-1">
                                Breakfast
                              </p>
                              <p className="font-inter text-sm text-gray-900 dark:text-white mb-1">
                                {day.breakfast.name}
                              </p>
                              <p className="font-inter text-xs text-gray-600 dark:text-gray-300">
                                {day.breakfast.calories} cal • {day.breakfast.cost} KES
                              </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                              <p className="font-inter text-sm font-medium text-orange-600 dark:text-orange-400 mb-1">
                                Lunch
                              </p>
                              <p className="font-inter text-sm text-gray-900 dark:text-white mb-1">
                                {day.lunch.name}
                              </p>
                              <p className="font-inter text-xs text-gray-600 dark:text-gray-300">
                                {day.lunch.calories} cal • {day.lunch.cost} KES
                              </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                              <p className="font-inter text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                                Dinner
                              </p>
                              <p className="font-inter text-sm text-gray-900 dark:text-white mb-1">
                                {day.dinner.name}
                              </p>
                              <p className="font-inter text-xs text-gray-600 dark:text-gray-300">
                                {day.dinner.calories} cal • {day.dinner.cost} KES
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Grocery List */}
                <div>
                  <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg sticky top-24">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-poppins text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        Grocery List
                      </h3>
                      <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="space-y-3">
                      {generatedPlan.groceryList.map((item: any, index: number) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-600 last:border-b-0">
                          <div>
                            <p className="font-inter text-sm font-medium text-gray-900 dark:text-white">
                              {item.item}
                            </p>
                            <p className="font-inter text-xs text-gray-600 dark:text-gray-300">
                              {item.quantity}
                            </p>
                          </div>
                          <p className="font-inter text-sm font-semibold text-green-600 dark:text-green-400">
                            {item.cost} KES
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <div className="flex justify-between items-center">
                        <p className="font-inter text-sm font-medium text-gray-900 dark:text-white">
                          Total
                        </p>
                        <p className="font-poppins text-lg font-bold text-green-600 dark:text-green-400">
                          {generatedPlan.totalCost} KES
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 font-inter font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-100">
                    Save This Plan
                  </button>
                  <button className="px-8 py-4 font-inter font-semibold text-green-600 dark:text-green-400 bg-white dark:bg-gray-700 border-2 border-green-600 dark:border-green-400 rounded-xl hover:bg-green-50 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-100">
                    Share Plan
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      <Footer />
    </main>
  );
}