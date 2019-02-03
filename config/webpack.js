const path = require('path')
const { publicDirectory } = require('./express')

module.exports = {
  mode: 'development',
  entry: [
    path.resolve(__dirname, '../src')
  ],
  output: {
    path: publicDirectory,
    filename: 'bundle.js'
  }
}