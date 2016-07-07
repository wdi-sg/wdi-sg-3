const express = require('express')
const router = express.Router()

// configure the router to allow cross domain requests
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// ROOT
router.get('/', (req, res) => {
  res.status(200).json({api_version: 'v1.0.0', posts: '/posts'})
})

// INDEX
router.get('/posts', (req, res) => {
  res.status(200).json({
    results: ['post1', 'post2']
  })
})
// SHOW
router.get('/posts/:id', (req, res) => {
  res.status(200).json({result: `post${req.params.id}`})
})
// CREATE
router.post('/posts', (req, res) => {
  console.log(req.body)
  res.status(200).json({
    message: 'post created',
    title: req.body.title
  })
})
// UPDATE
router.put('/posts/:id', (req, res) => {
  res.status(200).json({message: `post${req.params.id} updated`})
})
// DELETE/DESTROY
router.delete('/posts/:id', (req, res) => {
  res.status(200).json({message: `post${req.params.id} deleted`})
})

module.exports = router
