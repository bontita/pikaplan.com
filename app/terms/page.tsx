import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';

/**
 * Terms of Service Page
 */
export default function TermsOfService() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-orange-50 to-transparent dark:from-green-950/20 dark:via-orange-950/10 dark:to-transparent pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Terms of <span className="bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="font-inter text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
              Please read these terms carefully before using PIKA PLAN services.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-8">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                By accessing and using PIKA PLAN ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Description of Service</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                PIKA PLAN is a meal planning and grocery optimization service that helps users create personalized meal plans based on their dietary preferences, budget, and lifestyle. Our service includes meal plan generation, recipe suggestions, grocery lists, and nutritional information.
              </p>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">User Accounts</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                To use certain features of our service, you must register for an account. You are responsible for:
              </p>
              <ul className="font-inter text-gray-600 dark:text-gray-300 mb-8 list-disc list-inside space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Providing accurate and complete information</li>
              </ul>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Subscription and Payment</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                Some features of our service require a paid subscription. By subscribing:
              </p>
              <ul className="font-inter text-gray-600 dark:text-gray-300 mb-8 list-disc list-inside space-y-2">
                <li>You agree to pay all applicable fees</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>You can cancel your subscription at any time</li>
                <li>Refunds are provided according to our refund policy</li>
              </ul>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Acceptable Use</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                You agree not to use the service for any unlawful purposes or to conduct any unlawful activity, including but not limited to:
              </p>
              <ul className="font-inter text-gray-600 dark:text-gray-300 mb-8 list-disc list-inside space-y-2">
                <li>Violating any applicable laws or regulations</li>
                <li>Infringing on intellectual property rights</li>
                <li>Transmitting harmful or malicious code</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Using the service to harass or harm others</li>
              </ul>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Intellectual Property</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                The service and its original content, features, and functionality are and will remain the exclusive property of PIKA PLAN and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Disclaimer of Warranties</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                The service is provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of the service or the information, content, or materials included therein.
              </p>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                In no event shall PIKA PLAN be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the service.
              </p>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Termination</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Governing Law</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                These Terms shall be interpreted and governed by the laws of Kenya, without regard to its conflict of law provisions.
              </p>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="font-inter text-gray-600 dark:text-gray-300 mb-8">
                <p><strong>Email:</strong> <Link href="mailto:pikaplan@gmail.com" className="text-green-600 dark:text-green-400 hover:underline">pikaplan@gmail.com</Link></p>
                <p><strong>Phone:</strong> <Link href="tel:+254797846624" className="text-green-600 dark:text-green-400 hover:underline">+254 797 846 624</Link></p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}