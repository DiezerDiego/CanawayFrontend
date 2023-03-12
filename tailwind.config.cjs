/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*/*.{js,ts,jsx,tsx}",
    "./App.jsx",
  ],
  theme: {
    screens: {
      'xs':'450px',
      ...defaultTheme.screens,
   
    },
    extend: {
      backgroundImage:{
        'sword':"url('/src/assets/espada.png')",
        'pattern1':"url('/src/assets/pattern1.png')"
      },

    },
  },
  plugins: [],
}
