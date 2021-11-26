const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
var history = require('connect-history-api-fallback')
const port = process.env.PORT || 80

const app = express()

// Static frontend
app.use(history())
app.use('/', serveStatic(path.join(__dirname, 'dist')))

app.listen(port, () => {
  console.log('App is running on port ' + port)
})
