const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const history = require('connect-history-api-fallback')

const app = express()
const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const port = isDev ? 8081 : process.env.PORT

// Redirect to https in production, for auth0 callbacks
app.use(function (request, response, next) {
  if (isProd && !(request.headers['x-forwarded-proto'] === 'https' || request.secure)) {
    const newUrl = 'https://' + request.headers.host + request.url
    response.redirect(newUrl)
  } else {
    next()
  }
})

// Static frontend
app.use(history())
app.use('/', serveStatic(path.join(__dirname, '..', 'dist')))

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
