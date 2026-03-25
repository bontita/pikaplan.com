'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

/**
 * Contact Us Page
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <main className="flex flex-col min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-orange-50 to-transparent dark:from-green-950/20 dark:via-orange-950/10 dark:to-transparent pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Get in <span className="bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="font-inter text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
              Have questions about PIKA PLAN? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-inter text-gray-600 dark:text-gray-300">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-inter text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-inter text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-inter text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing & Pricing</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-inter text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 font-inter font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <p className="font-inter text-gray-600 dark:text-gray-300 mb-8">
                  Prefer to reach out directly? Here are our contact details.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Email Us
                    </h3>
                    <p className="font-inter text-gray-600 dark:text-gray-300">
                      pikaplan@gmail.com
                    </p>
                    <p className="font-inter text-sm text-gray-500 dark:text-gray-400">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Call Us
                    </h3>
                    <p className="font-inter text-gray-600 dark:text-gray-300">
                      +254 797 846 624
                    </p>
                    <p className="font-inter text-sm text-gray-500 dark:text-gray-400">
                      Mon-Fri, 9AM-6PM EAT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Visit Us
                    </h3>
                    <p className="font-inter text-gray-600 dark:text-gray-300">
                      Nairobi, Kenya
                    </p>
                    <p className="font-inter text-sm text-gray-500 dark:text-gray-400">
                      Westlands Business Park
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Answers
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-inter text-sm font-medium text-gray-900 dark:text-white">
                      How quickly do you respond?
                    </p>
                    <p className="font-inter text-xs text-gray-600 dark:text-gray-300">
                      We aim to respond to all inquiries within 24 hours.
                    </p>
                  </div>
                  <div>
                    <p className="font-inter text-sm font-medium text-gray-900 dark:text-white">
                      Do you offer refunds?
                    </p>
                    <p className="font-inter text-xs text-gray-600 dark:text-gray-300">
                      Yes, 30-day money-back guarantee on all plans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}