const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // purgecss({
    //   content: [
    //     './*.tsx',
    //     './**/*.tsx'
    //   ],
    //   defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
    // })
  ],
  log: console.log("PostCSS Watch")
};
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   }
// }
