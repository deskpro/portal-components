const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const postcssNested = require('postcss-nested');
const postcssColorMod = require('@alexlafroscia/postcss-color-mod-function');
const fs = require('fs')

fs.readFile('src/style.css', (err, css) => {
  postcss([autoprefixer, postcssNested, postcssColorMod])
    .process(css, { from: 'src/style.css', to: 'dist/style.css' })
    .then(result => {
      fs.writeFile('dist/style.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('dist/style.css.map', result.map.toString(), () => true)
      }
    })
})
