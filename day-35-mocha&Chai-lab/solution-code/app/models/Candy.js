var mongoose = require('mongoose');

var CandySchema = mongoose.Schema({
	name: String,
	color: String
});

CandySchema.path('color').validate(function (value) {
  return /blue|green|white|red|orange/i.test(value);
}, 'Invalid color');


module.exports = mongoose.model('Candy', CandySchema);