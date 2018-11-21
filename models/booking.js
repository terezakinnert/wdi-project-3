const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
  booker: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  animal: {
    type: mongoose.Schema.ObjectId,
    ref: 'Animal'
  },
  pickup: Date,
  dropoff: Date,
  timestamp: Date
});


bookingSchema.virtual('status')
  .get(function() {
    if (new Date() > this.dropoff) return 'complete';
    if (new Date() < this.pickup) return 'pending';
    return 'inProgress';
  });


// include virtuals in res.json
bookingSchema.set('toJSON', {
  virtuals: true
});


const bookingModel = mongoose.model('Booking', bookingSchema);
module.exports = bookingModel;
