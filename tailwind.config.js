const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
  enabled: false,
  content: [
    './src/*.tsx',
    './src/**/*.tsx'
  ]},
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Graphik', 'sans-serif'],
      'display': ['Graphik', 'sans-serif'],
      'body': ['Graphik', 'sans-serif'],
    },
    borderWidth: {
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px'
    },
    extend: {
      colors: {
        'nwblue': 'hsl(227, 94%, 60%)',
        'nwdarkblue': 'hsl(227, 63%, 47%)',
        'nwlightgray': 'hsl(218, 29%, 92%)',
        'nwgray': 'hsl(218, 26%, 82%)',
        'nwdarkgray': 'hsl(218, 39%, 20%)'
      }
    },
    colors: {
      // Build your palette here
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      // red: colors.red,
      // orange: colors.orange,
      // amber: colors.amber,
      // yellow: colors.yellow,
      // lime: colors.lime,
      // green: colors.green,
      // emerald: colors.emerald,
      // teal: colors.teal,
      // cyan: colors.cyan,
      // lightBlue: colors.lightBlue,
      // blue: colors.blue,
      // indigo: colors.indigo,
      // violet: colors.violet,
      // purple: colors.purple,
      // fuchsia: colors.fuchsia,
      // pink: colors.pink,
      // rose: colors.rose,
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
      textColor: ['active'],
      transitionDuration: ['hover', 'focus'],
    },
  },
  plugins: [],
}
