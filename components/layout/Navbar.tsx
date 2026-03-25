'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import ThemeToggle from '@/components/ui/ThemeToggle';

/**
 * Navbar Component
 * Sticky navigation with logo, links, theme toggle, and CTA button
 */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/generator', label: 'Generator' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-green/10 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:border-gray-700/20 transition-colors duration-300">
      <Container className="flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-poppins text-xl md:text-2xl font-bold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
        >
          PIKA PLAN
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="font-inter text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side - Theme Toggle + CTA Button */}
        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />
          <button className="hidden md:inline-flex px-5 py-2 font-inter text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-colors shadow-md hover:shadow-lg">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <Container className="py-4 space-y-3">
            {navLinks.map((link, idx) => (
              <Link
                key={`mobile-${idx}`}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full px-4 py-2 mt-2 font-inter text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-colors">
              Get Started
            </button>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
