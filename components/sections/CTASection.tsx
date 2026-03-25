import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';

/**
 * CTA Section
 * Strong call-to-action with primary button
 */
export const CTASection: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-orange-500 dark:from-green-700 dark:via-green-800 dark:to-orange-700 opacity-90"></div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Headline */}
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Ready to Transform Your Meals?
          </h2>

          {/* Subtext */}
          <p className="font-inter text-lg text-white/90 max-w-2xl mb-8">
            Join thousands of users who are already saving time, money, and eating healthier with PIKA PLAN.
          </p>

          {/* CTA Button */}
          <Link href="/generator" className="px-10 py-4 font-inter font-semibold text-green-600 dark:text-green-900 bg-white rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 hover:shadow-2xl active:scale-100 shadow-lg">
            Start Planning Now
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
