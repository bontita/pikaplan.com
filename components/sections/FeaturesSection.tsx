import React from 'react';
import { Zap, DollarSign, ShoppingCart } from 'lucide-react';
import Container from '@/components/ui/Container';

/**
 * Features Section
 * 3 feature cards with icons, titles, and descriptions
 */
export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Smart Meal Planning',
      description: 'Personalized meal plans tailored to your preferences, dietary goals, and nutritional needs.',
    },
    {
      icon: DollarSign,
      title: 'Budget Optimization',
      description: 'Maximize your savings with smart recipe selection that balances nutrition, taste, and cost-effectiveness.',
    },
    {
      icon: ShoppingCart,
      title: 'Smart Shopping Lists',
      description: 'Auto-generated, organized shopping lists with price comparisons to help you save time and money at checkout.',
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose PIKA PLAN?
          </h2>
          <p className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to plan meals smarter and live better.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-orange-100 dark:from-green-900/30 dark:to-orange-900/30">
                  <Icon className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>

                {/* Content */}
                <h3 className="font-poppins text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
