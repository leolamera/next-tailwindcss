const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyanDracula: '#8be9fd',
        pinkDracula: '#ff79c6',
        purpleDracula: '#bd93f9',
        greenDracula: '#50fa7b',
        orangeDracula: '#ffb86c',
        yellowDracula: '#f1fa8c',
        formDracula: '#f8f8f2',
        bgDracula: '#282a36',
        containerDracula: '#44475a',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
