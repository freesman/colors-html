const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // env: {
  //   TEST_KEY: process.env.TEST_KEY,
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
    });

    config.plugins.push(
      new ESLintPlugin({
        extensions: ['js', 'jsx'],
        failOnError: false,
      })
    );

    return config;
  },
};
