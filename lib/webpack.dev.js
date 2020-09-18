const webpack = require('webpack');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },

  devtool: 'cheap-source-map', // sourcemap
};

module.exports = merge(baseConfig, devConfig);
