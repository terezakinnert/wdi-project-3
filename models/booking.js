const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  animal: {
    type: mongoose.Schema.ObjectId,
    ref: 'Animal'
  },
  pickup: Date,
  dropoff: Date
});

const bookingModel = mongoose.model('Booking', bookingSchema);
module.exports = bookingModel;
