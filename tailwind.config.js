/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'libre': ['"Libre Franklin"', 'sans-serif'],
        'mont': ['Montserrat', 'sans-serif'],
      },
      screens: {
        'sm': '301px',
        'md': '600px',
        'xl': '800px',
        'lg': '1000px'
      },
      colors: {
        'red': '#DD2323',
        'green': '#388456',
        'navbarbg': 'rgba(0, 0, 0, 0.7)',
        'herobg': '#50A54E50',
        'white': '#FFFFFF',
        'black': '#000000',
        'greenbg': '#46955330',
      },
      dropShadow: {
        'dropred': '0 5px 5px rgba(210, 39, 34, 0.19)',
        'dropblack': '0 5px 5px #00000030',
        'dropgreen': '0 0 5px #469553'
      },
      fontSize: {
        'xs': '10px',
        's': '16px',
        'sl': '20px',
        'm': '24px',
        'l': '32px',
        'ml': '36px',
        'lg': '40px',
        'xl': '48px',
        'xxl': '60px',
      },
    },
  },
  plugins: [],
}