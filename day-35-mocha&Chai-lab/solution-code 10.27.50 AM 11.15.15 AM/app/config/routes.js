var express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser'), // parses information from POST
  methodOverride = require('method-override') // used to manipulate POST

var candiesController = require('../controllers/candies')
// Allow cross-domain Ajax requests
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

router.route('/candies')

  // GET all candies
  .get(candiesController.getAll)

  // POST a new blob
  .post(candiesController.createCandy)

router.route('/candies/:id')

  // GET return specific candy
  .get(candiesController.getCandy)

  // PATCH update existing candy
  .patch(candiesController.updateCandy)

  // DELETE remove specific candy from DB
  .delete(candiesController.removeCandy)

module.exports = router
