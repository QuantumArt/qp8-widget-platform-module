const baseconfig = require('./webpack.config.client.standalone._');
const { merge } = require('webpack-merge');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = env => ({});

module.exports = env => merge(baseconfig(env), webpackConfig(env));
