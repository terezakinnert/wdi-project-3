const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
  name: String,
  bio: String,
  sex: String,
  species: String,
  breed: [String],
  age: Number,
  color: [String],
  imageUrl: String,
  location: String,
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  rating: [Number],
  availableOn: {
    type: mongoose.Schema.ObjectId,
    ref: 'Booking'
  },
  comments: [{
    text: String,
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
  }]
});


// virtual for number of bookings
animalSchema.virtual('bookings', {
  ref: 'Booking',
  localField: '_id',
  foreignField: 'animal'
});

// average rating virtual
animalSchema.virtual('meanRating')
  .get(function() {
    const averageRating = array => array.reduce((a, b) => a + b, 0) / array.length;
    const result = averageRating(this.rating);
    return result;
  });

// include virtuals in res.json
animalSchema.set('toJSON', {
  virtuals: true
});



const animalModel = mongoose.model('Animal', animalSchema);
module.exports = animalModel;
