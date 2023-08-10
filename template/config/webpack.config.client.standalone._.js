const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const baseconfig = require('./webpack.config.client._');
const { merge } = require('webpack-merge');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = env => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/client/public/index.html'),
    }),
  ],
});

module.exports = env => merge(baseconfig(env), webpackConfig(env));
