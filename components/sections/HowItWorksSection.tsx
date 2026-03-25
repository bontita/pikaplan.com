'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import { User, ChefHat, ShoppingCart, Utensils } from 'lucide-react';

/**
 * How It Works Section Component
 */
export default function HowItWorksSection() {
  const steps = [
    {
      icon: User,
      title: 'Tell Us About Yourself',
      description: 'Share your dietary preferences, allergies, budget, and lifestyle to get personalized recommendations.',
      step: '01'
    },
    {
      icon: ChefHat,
      title: 'Get Your Meal Plan',
      description: 'Receive a customized meal plan with delicious recipes, nutritional information, and cooking instructions.',
      step: '02'
    },
    {
      icon: ShoppingCart,
      title: 'Generate Grocery List',
      description: 'Get an organized shopping list with all ingredients needed, helping you shop smarter and save money.',
      step: '03'
    },
    {
      icon: Utensils,
      title: 'Cook & Enjoy',
      description: 'Follow easy recipes and enjoy nutritious, home-cooked meals that fit your schedule and taste buds.',
      step: '04'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How <span className="bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">PIKA PLAN</span> Works
          </h2>
          <p className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get started in minutes with our simple 4-step process to healthier eating.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-4">
                  <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>

                {/* Content */}
                <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 dark:bg-gray-600 transform -translate-y-1/2"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
            Ready to start your journey to better eating?
          </p>
          <a
            href="/generator"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-inter font-semibold rounded-xl hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            Create Your First Plan
          </a>
        </div>
      </Container>
    </section>
  );
}