import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';

/**
 * Hero Section
 * Headline, subtext, CTA buttons, and gradient background
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-28 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-orange-50 to-transparent dark:from-green-950/20 dark:via-orange-950/10 dark:to-transparent pointer-events-none"></div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Headline */}
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            <span className="bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">
              Smart Meal Plans
            </span>
            <br />
            That Fit Your Budget
          </h1>

          {/* Subtext */}
          <p className="font-inter text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed">
            Plan smarter, eat better, and save money with personalized meal plans tailored to your lifestyle and preferences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {/* Primary Button */}
            <Link href="/generator" className="px-8 py-4 font-inter font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-100 text-center">
              Generate My Plan
            </Link>

            {/* Secondary Button */}
            <Link href="/pricing" className="px-8 py-4 font-inter font-semibold text-green-600 dark:text-green-400 bg-white dark:bg-gray-800 border-2 border-green-600 dark:border-green-400 rounded-xl hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-100 text-center">
              View Pricing
            </Link>
          </div>

          {/* Visual Placeholder - Gradient Card */}
          <div className="w-full max-w-3xl h-64 md:h-80 rounded-2xl bg-gradient-to-br from-green-100 to-orange-100 dark:from-green-900/30 dark:to-orange-900/30 border border-green-200 dark:border-green-800 flex items-center justify-center shadow-2xl">
            <div className="text-center">
              <p className="font-poppins text-xl font-semibold text-gray-600 dark:text-gray-400">
                Meal Plan Preview
              </p>
              <p className="font-inter text-sm text-gray-500 dark:text-gray-500 mt-2">
                Your personalized plan will appear here
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
