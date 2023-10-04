const {
  container: { ModuleFederationPlugin },
} = require('webpack');
const { NodeFederationPlugin, StreamingTargetPlugin } = require('@module-federation/node');
const pkg = require('../package.json');

const exposes = {
  //"{nodeType}": "{component}"
  //pages
  './start_page': './src/components/pages/start-page/start-page',
  './text_page': './src/components/pages/text-page/text-page',
  //widgets
  './html_widget': './src/components/widgets/html-widget/html-widget',
};

const remotes = {};

const shared = {
  ...pkg.dependencies,
  react: {
    singleton: true,
    requiredVersion: pkg.dependencies.react,
  },
  'react-dom': {
    singleton: true,
    requiredVersion: pkg.dependencies['react-dom'],
  },
  'react-router-dom': {
    singleton: true,
  },
  'styled-components': {
    singleton: true,
  },
  '@quantumart/qp8-widget-platform-bridge': {
    singleton: true,
  },
};

module.exports = env => ({
  client: new ModuleFederationPlugin({
    name: 'qp_widgets_platform_modules',
    filename: 'remoteEntry.js',
    exposes: exposes,
    remotes: remotes,
    shared: shared,
  }),
  server: [
    new NodeFederationPlugin({
      name: 'qp_widgets_platform_modules',
      library: { type: 'commonjs-module' },
      remotes: remotes,
      filename: 'remoteEntry.js',
      exposes: exposes,
      shared: shared,
    }),
    new StreamingTargetPlugin({
      name: 'qp_widgets_platform_modules',
      library: { type: 'commonjs-module' },
      remotes: remotes,
    }),
  ],
});
