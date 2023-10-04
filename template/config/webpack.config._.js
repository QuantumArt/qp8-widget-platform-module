const path = require('path');
const TsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = env => ({
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      src: path.resolve(__dirname, '../src/'),
      assets: path.resolve(__dirname, '../src/client/assets/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.(scss|css)?$/,
        oneOf: [
          {
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  url: false,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [['autoprefixer', {}]],
                  },
                },
              },
              {
                loader: 'resolve-url-loader',
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
      },
      {
        test: /settings.json$/,
        type: 'asset/resource',
        generator: {
          filename: './[name][ext]',
        },
      },
    ],
  },
  plugins: [new TsCheckerWebpackPlugin()],
});

module.exports = webpackConfig;
