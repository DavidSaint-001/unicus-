/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          light: "#EBF2FF",
          DEFAULT: "#2D69F0",
          dark: "#1E4DB7",
        },
        brandDark: "#1A202C",
        brandGray: "#4A5568",
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 50px -12px rgba(0, 0, 0, 0.08)',
        pill: '0 4px 14px 0 rgba(45, 105, 240, 0.39)',
      },
      borderRadius: {
        section: '3rem',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
