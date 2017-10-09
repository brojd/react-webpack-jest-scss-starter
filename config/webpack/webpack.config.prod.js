const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const webpackConfigBase = require('./webpack.config');

module.exports = merge(webpackConfigBase, {
  plugins: [
    new UglifyJSPlugin(),
    new MinifyPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});
