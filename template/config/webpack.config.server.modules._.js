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
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../dist/static/server'),
    chunkFilename: '[name].[contenthash].js',
    filename: 'main.[contenthash].js',
  },
  externalsType: 'node-commonjs',
  //externals: [nodeExternals()],
  plugins: [...moduleFederationPlugin(env).server],
});

module.exports = env => merge(baseconfig(env), webpackConfig(env));
