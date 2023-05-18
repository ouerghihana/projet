// Film.js
const mongoose = require('mongoose');

const movieSchema =  new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  
  image: String,

  posterUrl:{
    type: String ,
    required: true,
  },
 status:{
  type : String,
  default: 'disponible',
 },
}
)
module.exports = mongoose.model('Movie',movieSchema);