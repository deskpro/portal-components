const cssnext = require('postcss-preset-env');
const path = require('path');

module.exports = async ({ config }) => {

  config.module.rules = config.module.rules.filter(rule => !rule.test.exec('.css'));
  config.module.rules.push({
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
      ],
    include: path.resolve(__dirname, '../../')
  });
  config.module.rules.push({
    test: /\.(ttf|eot|woff|woff2)$/,
    loader: 'file-loader',
    options: {
      name: 'fonts/[name].[ext]',
    },
  });
  config.module.rules.push({
    test: /\.svg$/,
    loader: 'raw-loader'
  });

  // Return the altered config
  return config;
};
