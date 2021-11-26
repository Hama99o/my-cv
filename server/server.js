const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
// const serveStatic = require('serve-static')
// var history = require('connect-history-api-fallback')
// const path = require('path')

const app = express()

// app.use(history())
// app.use('/', serveStatic(path.join(__dirname, 'dist')))

app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Behold The MEVN Stack!'
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
