const path = require('path');
const pkg = require('../package.json');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry:  path.resolve(__dirname, '../src/index.js'),
  output: {
    path:          path.resolve(__dirname, '../dist'),
    filename:      'index.js',
    library:       '',
    libraryTarget: 'commonjs'
  },
  resolve: {
    modules:    ['node_modules', 'src'],
    extensions: ['.js', '.jsx']
  },
  // externals: [nodeExternals()],
  module: {
    rules: [
      {
        test:    /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader:  'babel-loader'
      },
      {
        test: /\.css$/,
        use:  ['style-loader', 'css-loader']
      },
      {
        loader:  require.resolve('file-loader'),
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.css$/],
        options: {
          name: 'assets/[name].[ext]'
        }
      }
    ]
  }
};
