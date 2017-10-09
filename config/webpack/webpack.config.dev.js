const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config');
const paths = require('../paths');

module.exports = merge(webpackConfigBase, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.dist,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
