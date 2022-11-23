/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: 'Open Sans'
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        lg: '0',
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#000000',
        third: '#80d7ff',
      }
    },
  },
  plugins: [],
}
