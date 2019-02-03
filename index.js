const express = require('express')
const app = express()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./config/webpack')
const { port, publicDirectory } = require('./config/express')

const compiler = webpack(webpackConfig)
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath || '/'
  })
)

app.use(
  webpackHotMiddleware(compiler)
)

app.use(
  express.static(publicDirectory)
)

app.listen(port, () => {
  console.log(`Sever listening on ${port}`)
})