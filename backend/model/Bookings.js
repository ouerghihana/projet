const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
    user: {
        type: String,
        ref: 'User',
        required: true
    },
    movie: {
        type: String,
       
        required: true
    },
    numberOfSeats: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});
module.exports = mongoose.model('bookings',bookingSchema);