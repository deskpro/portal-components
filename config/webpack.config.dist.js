const path = require('path');
const pkg = require('../package.json');
// const nodeExternals = require('webpack-node-externals');

const mapToFolder = (dependencies, folder) =>
  dependencies.reduce(
    (acc, dependency) => ({
      [dependency]: path.resolve(`${folder}/${dependency}`),
      ...acc
    }),
    {}
  );

module.exports = {
  entry:  path.resolve(__dirname, '../src/index.js'),
  output: {
    path:          path.resolve(__dirname, '../dist'),
    filename:      'index.js',
    library:       '',
    libraryTarget: 'commonjs'
  },
  devtool: 'source-map',
  resolve: {
    modules:    ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
    alias:      {
      ...mapToFolder(['react', 'react-dom', 'formik'], './node_modules')
    },
    symlinks: false
  },
  externals: {
    react:       'react',
    'react-dom': 'react-dom',
    formik:      'formik'
  },
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
