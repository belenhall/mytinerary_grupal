const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
 name:{
    type: String,
 },
 city: {
     type: String,
 },
image:{
    type: String,
}, 
priceRange:{
type: String,
},
hashtag:{
type: Array,
}});

module.exports= Activity = mongoose.model("Activity", ActivitySchema);


