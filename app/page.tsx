import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

/**
 * Home Page - Landing Page
 * Composes Navbar, Hero, Features, CTA sections, and Footer
 */
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <Navbar />

      {/* Main Content */}
      <div className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}
