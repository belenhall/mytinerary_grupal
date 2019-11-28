var mongoose = require('mongoose');
var citySchema = new mongoose.Schema({
    name:String,
    country:String
})

var city = mongoose.model('city',citySchema);

module.exports = city;
