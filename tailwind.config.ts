import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#22C55E',
          dark: '#4CAF50',
        },
        secondary: {
          orange: '#FB923C',
          yellow: '#FACC15',
        },
        neutral: {
          'bg-light': '#FFF7ED',
          'bg-dark': '#18181B',
          'text-light': '#3F3F46',
          'text-dark': '#FAFAFA',
        },
        accent: {
          red: '#EF4444',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)'],
        playfair: ['var(--font-playfair)'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '2.5rem',
          xl: '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
      },
      backdropBlur: {
        md: '12px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config
