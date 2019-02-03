const express = require('express')
const app = express()
const { port, publicDirectory } = require('./config/express')

app.use(
  express.static(publicDirectory)
)

app.listen(port, () => {
  console.log(`Sever listening on ${port}`)
})