const cssnext = require('postcss-preset-env');
const path = require('path');

module.exports = async ({ config }) => {

  config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.css$/'
  );
  config.module.rules.push({
    test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: './.storybook/'
            }
          }
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
