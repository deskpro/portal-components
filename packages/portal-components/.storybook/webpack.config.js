const cssnext = require('postcss-cssnext');
const paths = require('../config/paths');

console.log(paths);

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { /*modules: true, importLoaders: 1 */ } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                cssnext(),
              ],
              sourceMap: true,
            },
          },
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      }
    ]
  }
};
