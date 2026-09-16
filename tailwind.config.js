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
          DEFAULT: '#020617', // Slate 950 (Deep Space Blue/Black)
          lighter: '#0F172A', // Slate 900
          card: '#0F172A',
          border: '#1E293B'   // Slate 800
        },
        accent: {
          DEFAULT: '#06B6D4', // Electric Cyan
          hover: '#22D3EE'    // Lighter Cyan
        },
        white: '#F8FAFC',     // Crisp White
        black: '#020617',
        gray: {
          300: '#94A3B8',
          400: '#64748B',
          500: '#475569',
          600: '#334155',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Playfair Display"', '"Clash Display"', 'serif'] 
      }
    },
  },
  plugins: [],
}
