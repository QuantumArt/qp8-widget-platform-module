const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const shared = require('./webpack.config.client._');
const { merge } = require('webpack-merge');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/client/public/index.html'),
    }),
  ],
};

module.exports = merge(shared, webpackConfig);
