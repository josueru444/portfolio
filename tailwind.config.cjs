/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",    // Ink Black
        secondary: "#f5f5f5",  // Paper White
        accent: "#dc2626",     // Crimson Red
        surface: "#18181b",    // Zinc-900 equivalent for cards
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        jp: ['"Noto Sans JP"', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'gradient-x': 'gradientX 15s ease infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
