const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', ...fontFamily.sans]
      },
      colors: {
        layer: '#161714',
        primary: '#266fc0',
        secondary: '#af5dc3',
        tertiary: '#57bd50',
        text: '#cccccc'
      }
    }
  },
  plugins: []
}
