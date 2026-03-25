import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';

/**
 * About Us Page
 */
export default function About() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-orange-50 to-transparent dark:from-green-950/20 dark:via-orange-950/10 dark:to-transparent pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              About <span className="bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">PIKA PLAN</span>
            </h1>
            <p className="font-inter text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
              We're revolutionizing meal planning with smart solutions that make healthy eating accessible, affordable, and enjoyable for everyone.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="font-inter text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At PIKA PLAN, we believe that everyone deserves access to nutritious, delicious meals without the stress of planning and shopping. Our smart platform takes the guesswork out of meal planning by creating personalized meal plans that fit your budget, dietary preferences, and lifestyle.
              </p>
              <p className="font-inter text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We're committed to making healthy eating sustainable and enjoyable, helping you save time, money, and reduce food waste while improving your overall well-being.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white">Personalized Plans</h3>
                    <p className="font-inter text-sm text-gray-600 dark:text-gray-300">Tailored to your unique needs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white">Budget-Friendly</h3>
                    <p className="font-inter text-sm text-gray-600 dark:text-gray-300">Save money on groceries</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white">Time-Saving</h3>
                    <p className="font-inter text-sm text-gray-600 dark:text-gray-300">Smart planning saves your time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate experts dedicated to transforming how you eat and live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">👨‍💻</span>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-gray-900 dark:text-white mb-2">Alex Johnson</h3>
              <p className="font-inter text-sm text-green-600 dark:text-green-400 mb-3">Lead Developer</p>
              <p className="font-inter text-gray-600 dark:text-gray-300 text-sm">
                Building the smart technology that powers your meal plans with innovative solutions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">👩‍🍳</span>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-gray-900 dark:text-white mb-2">Sarah Chen</h3>
              <p className="font-inter text-sm text-orange-600 dark:text-orange-400 mb-3">Nutrition Expert</p>
              <p className="font-inter text-gray-600 dark:text-gray-300 text-sm">
                Ensuring every meal plan is nutritionally balanced and delicious.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">👨‍💼</span>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-gray-900 dark:text-white mb-2">Michael Rodriguez</h3>
              <p className="font-inter text-sm text-blue-600 dark:text-blue-400 mb-3">Product Manager</p>
              <p className="font-inter text-gray-600 dark:text-gray-300 text-sm">
                Making sure PIKA PLAN delivers the best user experience possible.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}