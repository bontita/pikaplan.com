import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';

/**
 * Privacy Policy Page
 */
export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-orange-50 to-transparent dark:from-green-950/20 dark:via-orange-950/10 dark:to-transparent pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Privacy <span className="bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="font-inter text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                We collect information you provide directly to us, such as when you create an account, use our meal planning services, or contact us for support. This may include:
              </p>
              <ul className="font-inter text-gray-600 dark:text-gray-300 mb-8 list-disc list-inside space-y-2">
                <li>Name and contact information</li>
                <li>Dietary preferences and restrictions</li>
                <li>Meal planning preferences and history</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>Communications with our support team</li>
              </ul>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                We use the information we collect to:
              </p>
              <ul className="font-inter text-gray-600 dark:text-gray-300 mb-8 list-disc list-inside space-y-2">
                <li>Provide and improve our meal planning services</li>
                <li>Personalize your meal plans and recommendations</li>
                <li>Process payments and manage your account</li>
                <li>Send you important updates and communications</li>
                <li>Provide customer support</li>
                <li>Analyze usage patterns to improve our services</li>
              </ul>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Information Sharing</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
              </p>
              <ul className="font-inter text-gray-600 dark:text-gray-300 mb-8 list-disc list-inside space-y-2">
                <li>With service providers who help us operate our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Security</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data and regular security assessments.
              </p>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Rights</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                You have the right to:
              </p>
              <ul className="font-inter text-gray-600 dark:text-gray-300 mb-8 list-disc list-inside space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Data portability</li>
              </ul>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="font-inter text-gray-600 dark:text-gray-300 mb-8">
                <p><strong>Email:</strong> <Link href="mailto:pikaplan@gmail.com" className="text-green-600 dark:text-green-400 hover:underline">pikaplan@gmail.com</Link></p>
                <p><strong>Phone:</strong> <Link href="tel:+254797846624" className="text-green-600 dark:text-green-400 hover:underline">+254 797 846 624</Link></p>
              </div>

              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to This Policy</h2>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-8">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}