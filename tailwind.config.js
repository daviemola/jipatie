const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      emerald: colors.emerald,
      gray: colors.coolGray,
      transparent: 'transparent',
      white: '#fff',
      blue: colors.sky,
      red: colors.red,
    },
    extend: {
      fontFamily: {
        sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
    minHeight: {
      '3/4': '75%',
      '9/10': '90%',
      '10/10': '100%',
      '75/100': '75vh',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-autofill'),
    require('tailwindcss-text-fill'),
    require('tailwindcss-shadow-fill'),
  ],
  variants: {
    extend: {
      borderColor: ['autofill', 'dark'],
      shadowFill: ['dark'],
      textFill: ['dark'],
    },
  },
}
