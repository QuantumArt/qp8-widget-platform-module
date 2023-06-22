const path = require('path');
const baseconfig = require('./webpack.config.client.standalone._');
const { merge } = require('webpack-merge');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  devtool: 'source-map',
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
  },
};

module.exports = merge(baseconfig, webpackConfig);
