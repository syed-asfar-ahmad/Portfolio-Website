/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // true black dark mode
        dark: {
          bg: '#0a0a0a',
          card: '#171717',
          border: '#262626',
        },
        primary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Playfair Display', 'serif'],
        stylish: ['Cormorant Garamond', 'serif'],
        name: ['DM Serif Display', 'Lora', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      keyframes: {
        nameLineRun: {
          '0%': { left: '0%', opacity: '0.8' },
          '50%': { left: '70%', opacity: '1' },
          '100%': { left: '0%', opacity: '0.8' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(24px, -24px) scale(1.05)' },
          '66%': { transform: 'translate(-16px, 16px) scale(0.98)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-20px, -20px) scale(1.03)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(12px, 20px)' },
          '75%': { transform: 'translate(-12px, -12px)' },
        },
        gradientShift: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        nameLineRun: 'nameLineRun 3s ease-in-out infinite',
        'float-slow': 'floatSlow 12s ease-in-out infinite',
        'float-slower': 'floatSlower 18s ease-in-out infinite',
        'float-medium': 'floatMedium 10s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
