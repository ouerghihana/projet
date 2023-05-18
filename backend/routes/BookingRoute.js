const express = require('express');
const bookingsrouter = express.Router();
const BookingControl =require('../controllers/BookingControl')



//http://localhost:4000/bookings/getAll
bookingsrouter.get('/getAll', BookingControl.getAllBookings);
//http://localhost:4000/bookings/getAll

bookingsrouter.get('/getAll/:id', BookingControl.getBookingById);
//http://localhost:4000/bookings/addbooking

bookingsrouter.post('/addbooking', BookingControl.addBooking);
//http://localhost:4000/bookings/UpBooking:id
bookingsrouter.put('/UpBooking/:id', BookingControl.updateBookingById);
//http://localhost:4000/bookings/deletBooking:id

bookingsrouter.delete('/deletBooking:id', BookingControl.deleteBooking);

module.exports = bookingsrouter;






















