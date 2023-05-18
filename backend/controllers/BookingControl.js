const bookingSchema = require('../model/Bookings');



 // Créer une nouvelle réservation
exports.addBooking = async (req, res) => {
    try {
      const { user, movie, date, numberOfSeats } = req.body;
      const newBooking = new bookingSchema({
        user,
        movie,
        date: new Date(`${date}`),
        numberOfSeats
      });
      await newBooking.save();
      res.status(200).json({ msg: 'Success booking', newBooking });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'An error occurred while creating the booking' });
    }
  };
  
 

  // Supprimer une réservation par ID
  exports.deleteBooking = async (req, res) => {
    try {
      const { id } = req.params;
      const booking = await bookingSchema.findByIdAndDelete(id);
      if (!booking) {
        res.status(404).json({ msg: "Booking does not exist" });
        return;
      }
      res.status(200).json({ msg: 'Booking successfully deleted' });
    } catch (err) {
      console.err(err);
      res.status(500).json({ msg: 'An error occurred while deleting the booking ' });
    }
  }
  
  

// Update a booking by ID
exports.updateBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const { user, movie, date, numberOfSeats } = req.body;

    // Find and update the booking by ID
    const updatedBooking = await bookingSchema.findByIdAndUpdate(
      id,
      { user, movie, date: new Date(`${date}`), numberOfSeats },
      { new: true }
    );

    // If the booking is not found, return an error
    if (!updatedBooking) {
      res.status(404).json({ msg: "Booking not found" });
      return;
    }

    // If the booking is successfully updated, return the updated booking object
    res.status(200).json({ msg: 'Booking updated successfully', updatedBooking });
  } catch (err) {
    console.err(err);
    // If an error occurs during the update, return an error message
    res.status(500).json({ msg: 'An error occurred while updating the booking' });
  }
}

  

// Obtenir toutes les réservationsconst bookingSchema = require('../model/Bookings');

// Get all bookings
exports.getAllBookings = async (req, res) => {
    try {
      // Find all bookings in the database
      const allBookings = await bookingSchema.find();
  
      res.status(200).json({ msg: 'All bookings', allBookings });
    } catch (err) {
      console.err(err);
      res.status(500).json({ msg: 'An error occurred while getting the bookings' });
    }
  }
  


// Get a booking by ID
exports.getBookingById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the booking by ID in the database
      const booking = await bookingSchema.findById(id);
  
      if (!booking) {
        res.status(404).json({ msg: 'Booking not found' });
        return;
      }
  
      // If the booking is found, return the booking object
      res.status(200).json({ msg: 'Booking found', booking });
    } catch (error) {
      console.err(err);
      // If an error occurs while getting the booking, return an error message
      res.status(500).json({ msg: 'An error occurred while getting the booking' });
    }
  }

