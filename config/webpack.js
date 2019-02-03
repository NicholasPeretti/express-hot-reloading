const webpack = require('webpack')
const path = require('path')
const { publicDirectory } = require('./express')

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, '../src')
  ],
  output: {
    path: publicDirectory,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}