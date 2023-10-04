const path = require('path');
const moduleFederationPlugin = require('./module-federation');
const baseconfig = require('./webpack.config._');
const { merge } = require('webpack-merge');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = env => ({
  entry: path.resolve(__dirname, '../src/client/index'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist/static/client'),
    publicPath: 'auto',
    chunkFilename: '[name].[contenthash].js',
    filename: 'main.[contenthash].js',
  },
  plugins: [moduleFederationPlugin(env).client],
  resolve: {
    fallback: {
      path: false,
    },
  },
});

module.exports = env => merge(baseconfig(env), webpackConfig(env));
