'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import { Star, Quote } from 'lucide-react';

/**
 * Testimonials Section Component
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Busy Professional',
      content: 'PIKA PLAN has completely changed how I approach meal planning. I save hours each week and eat healthier than ever!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'David K.',
      role: 'Fitness Enthusiast',
      content: 'The personalized meal plans fit perfectly with my workout routine. Great recipes and accurate nutritional info.',
      rating: 5,
      avatar: '👨‍💪'
    },
    {
      name: 'Maria L.',
      role: 'Working Mom',
      content: 'As a busy mom of three, PIKA PLAN helps me feed my family nutritious meals without the stress. Highly recommend!',
      rating: 5,
      avatar: '👩‍👧‍👦'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">Users Say</span>
          </h2>
          <p className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their meal planning experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-green-500 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-poppins text-sm font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-poppins text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              10K+
            </div>
            <p className="font-inter text-sm text-gray-600 dark:text-gray-300">
              Happy Users
            </p>
          </div>
          <div>
            <div className="font-poppins text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              50K+
            </div>
            <p className="font-inter text-sm text-gray-600 dark:text-gray-300">
              Meals Planned
            </p>
          </div>
          <div>
            <div className="font-poppins text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              95%
            </div>
            <p className="font-inter text-sm text-gray-600 dark:text-gray-300">
              Satisfaction Rate
            </p>
          </div>
          <div>
            <div className="font-poppins text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              24/7
            </div>
            <p className="font-inter text-sm text-gray-600 dark:text-gray-300">
              Support Available
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}