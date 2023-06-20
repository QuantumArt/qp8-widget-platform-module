const shared = require('./webpack.config.client.standalone._');
const { merge } = require('webpack-merge');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {};

module.exports = merge(shared, webpackConfig);
