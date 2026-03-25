import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

/**
 * Footer Component
 * App name, tagline, links, contact info, social media, and copyright
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '#', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com/pikaplan', icon: Facebook, label: 'Facebook' },
    { href: 'https://twitter.com/pikaplan', icon: Twitter, label: 'Twitter' },
    { href: 'https://instagram.com/pikaplan', icon: Instagram, label: 'Instagram' },
    { href: 'https://youtube.com/pikaplan', icon: Youtube, label: 'YouTube' },
  ];

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Container className="py-12 md:py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-poppins text-xl font-bold text-gray-900 dark:text-white">
                PIKA PLAN
              </h3>
              <p className="font-inter text-sm text-gray-600 dark:text-gray-400 mt-1">
                Smart Meals. Simple Living.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-600 dark:text-green-400" />
                <a
                  href="mailto:pikaplan@gmail.com"
                  className="font-inter text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  pikaplan@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-600 dark:text-green-400" />
                <a
                  href="tel:+254797846624"
                  className="font-inter text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  +254 797 846 624
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="font-inter text-sm text-gray-600 dark:text-gray-400">
                  Nairobi, Kenya
                </span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-inter text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Product
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/generator"
                className="font-inter text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Meal Generator
              </Link>
              <Link
                href="/pricing"
                className="font-inter text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="font-inter text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Recipes
              </Link>
            </nav>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-inter text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Company
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link, idx) => (
                <Link
                  key={`footer-${idx}`}
                  href={link.href}
                  className="font-inter text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/terms"
                className="font-inter text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Social Media & Newsletter */}
          <div className="flex flex-col gap-3">
            <h4 className="font-inter text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Connect
            </h4>

            {/* Social Media Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={`social-${idx}`}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-4">
              <p className="font-inter text-sm text-gray-600 dark:text-gray-400 mb-2">
                Stay updated with our latest recipes and features.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} PIKA PLAN. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="font-inter text-xs text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-inter text-xs text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
