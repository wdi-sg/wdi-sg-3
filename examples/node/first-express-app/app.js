const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = require('./config/routes')

app.set('views', './views')
app.set('view engine', 'ejs')

// plugin logger middleware
app.use(morgan('dev'))

// plugin middleware for parsing request data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// plugin our api router
app.use('/api/', router)

// add any routes that are not part of the api
app.get('/', (req, res) => {
  res.render('index', {title: 'My Website'})
})

// serve everything in public folder as static files
app.use(express.static('public'))

// last resort - catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Catch Development Errors
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// Catch Production error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})
// start the server listening
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
