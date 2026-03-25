import type { Metadata } from 'next';
import { Poppins, Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

/**
 * Font Configuration
 */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

/**
 * Metadata
 */
export const metadata: Metadata = {
  title: 'PIKA PLAN - Smart Meal Planning',
  description: 'Smart Meals. Simple Living. Plan smarter, eat better, and save money with personalized meal plans.',
  keywords: ['meal planning', 'budget', 'recipes', 'healthy eating', 'grocery planning'],
  authors: [{ name: 'PIKA PLAN' }],
  openGraph: {
    title: 'PIKA PLAN - Smart Meal Planning',
    description: 'Smart Meals. Simple Living.',
    type: 'website',
  },
};

/**
 * Root Layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${poppins.variable} ${inter.variable} ${playfair.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
