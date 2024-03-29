/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        floatUp: {
          "0%": {transform: "translatey(0px)"},
          "50%": {transform: "translatey(-8px)"},
          "100%": {transform: "translatey(0px)"},
        }
      },
      animation:{
        floatUp: "floatUp 2s infinite"
      },
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      }
    },
  },
  plugins: [],
}

