'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import { Check, Star, Zap } from 'lucide-react';

/**
 * Pricing Page
 */
export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Daily',
      price: billingCycle === 'monthly' ? 14 : 14,
      period: 'KES',
      description: 'Perfect for trying out our service',
      features: [
        '1 meal plan per day',
        'Basic grocery list',
        'Email support',
        'Cancel anytime'
      ],
      popular: false,
      buttonText: 'Start Daily Plan',
      buttonLink: '/generator'
    },
    {
      name: 'Weekly',
      price: billingCycle === 'monthly' ? 99 : 99,
      period: 'KES',
      description: 'Most popular choice for regular meal planning',
      features: [
        '7 meal plans per week',
        'Detailed grocery lists',
        'Recipe instructions',
        'Priority email support',
        'Budget optimization',
        'Cancel anytime'
      ],
      popular: true,
      buttonText: 'Start Weekly Plan',
      buttonLink: '/generator'
    },
    {
      name: 'Monthly',
      price: billingCycle === 'monthly' ? 199 : 199,
      period: 'KES',
      description: 'Complete meal planning solution',
      features: [
        '30 meal plans per month',
        'Advanced grocery optimization',
        'Custom recipe suggestions',
        'Phone & email support',
        'Nutritional analysis',
        'Family meal planning',
        'Cancel anytime'
      ],
      popular: false,
      buttonText: 'Start Monthly Plan',
      buttonLink: '/generator'
    },
    {
      name: 'Annual',
      price: billingCycle === 'monthly' ? 2200 : 2200,
      period: 'KES',
      description: 'Best value for committed meal planners',
      features: [
        '365 meal plans per year',
        'Everything in Monthly',
        'Advanced analytics',
        'Dedicated account manager',
        'API access',
        'Custom integrations',
        '2 months free'
      ],
      popular: false,
      buttonText: 'Start Annual Plan',
      buttonLink: '/generator'
    }
  ];

  return (
    <main className="flex flex-col min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-400 to-orange-500 dark:from-green-900 dark:via-green-800 dark:to-orange-800 opacity-90"></div>
        <div className="absolute inset-0 bg-black/20 dark:bg-black/30 backdrop-blur-sm"></div>

        <Container className="relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Simple, <span className="bg-gradient-to-r from-green-200 to-white bg-clip-text text-transparent">Transparent</span> Pricing
            </h1>
            <p className="font-inter text-lg md:text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
              Choose the plan that fits your lifestyle. All plans include our smart meal planning technology.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center gap-4 mb-8">
              <span className={`font-inter text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-white/70'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-14 h-7 bg-white/20 dark:bg-white/10 border border-white/30 rounded-full transition-colors duration-200" 
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'}`}></div>
              </button>
              <span className={`font-inter text-sm ${billingCycle === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                Yearly
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  plan.popular ? 'ring-2 ring-green-500 border-green-200 dark:border-green-800' : 'border-gray-200 dark:border-gray-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="font-poppins text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="font-inter text-lg text-gray-600 dark:text-gray-300">
                      {plan.period}
                    </span>
                  </div>
                  <p className="font-inter text-sm text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="font-inter text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.buttonLink}
                  className={`w-full px-6 py-4 font-inter font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-100 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-green-500/25'
                      : 'bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
              <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Can I change my plan anytime?
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the next billing cycle.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
              <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white mb-3">
                What payment methods do you accept?
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                We accept all major credit cards, M-Pesa, and bank transfers. All payments are processed securely.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
              <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Is there a free trial?
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Yes! Start with our Daily plan for just 14 KES to try our service. No commitment required.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
              <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Do you offer refunds?
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment in full.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-orange-500 dark:from-green-700 dark:via-green-800 dark:to-orange-700 opacity-90"></div>

        <Container className="relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <Zap className="w-16 h-16 text-white mb-6" />
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Ready to Start Planning?
            </h2>
            <p className="font-inter text-lg text-white/90 max-w-2xl mb-8">
              Join thousands of users who are already saving time and money with PIKA PLAN.
            </p>
            <Link
              href="/generator"
              className="px-10 py-4 font-inter font-semibold text-green-600 dark:text-green-900 bg-white rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 hover:shadow-2xl active:scale-100 shadow-lg"
            >
              Generate Your First Plan
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}