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
        DEFAULT: '1rem',
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
      },
    },
  },
  plugins: [],
};
