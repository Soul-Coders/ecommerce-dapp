/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '1.5rem',
        lg: '3rem',
      },
    },
    fontFamily: {
      body: ['Manrope', 'sans-serif'],
    },
    extend: {
      colors: {
        'background': '#0F0E11',
        'brand-red': '#EB0C2B',
        'brand-purple': '#7B38BA',
        'brand-lavender': '#E3ECFF',
        'dimmed-black': '#181818',
        'dimmer-black': '#969696',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
  ],
};
