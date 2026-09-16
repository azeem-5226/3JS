/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#050505', // Pure deep black
          lighter: '#121212', // Slightly lighter for cards
          card: '#121212',
          border: '#2A2A2A'   // Sharp, dark borders
        },
        accent: {
          DEFAULT: '#CCFF00', // Neon Lime / Cyberpunk Green
          hover: '#D4FF33'    // Lighter neon
        },
        // Standard mapping for dark mode
        white: '#FFFFFF',
        black: '#050505',
        gray: {
          300: '#A3A3A3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Playfair Display"', '"Clash Display"', 'serif'] // Clash display works perfectly for this
      }
    },
  },
  plugins: [],
}
