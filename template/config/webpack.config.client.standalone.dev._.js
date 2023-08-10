const path = require('path');
const baseconfig = require('./webpack.config.client.standalone._');
const { merge } = require('webpack-merge');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = env => ({
  devtool: 'eval',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    port: 3201,
    historyApiFallback: true,
    hot: false,
  },
});

module.exports = env => merge(baseconfig(env), webpackConfig(env));
