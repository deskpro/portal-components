const cssnext = require('postcss-preset-env');

module.exports = async ({ config }) => {

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
