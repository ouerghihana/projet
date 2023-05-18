// Cinema.js
const mongoose = require('mongoose');

const cinemaSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rooms: [String],
});

module.exports = mongoose.model('Cinema', cinemaSchema);