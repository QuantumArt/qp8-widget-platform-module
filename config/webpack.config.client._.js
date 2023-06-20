const path = require('path');
const moduleFederationPlugin = require('./module-federation');
const shared = require('./webpack.config._');
const { merge } = require('webpack-merge');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  entry: path.resolve(__dirname, '../src/client/index'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist/static/client'),
    publicPath: 'auto',
    chunkFilename: '[name].[contenthash].js',
    filename: 'main.[contenthash].js',
  },
  plugins: [moduleFederationPlugin.client],
};

module.exports = merge(shared, webpackConfig);
