const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
  name: String,
  bio: String,
  sex: String,
  species: String,
  breed: String,
  age: Number,
  color: [String],
  imageUrl: String,
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

const animalModel = mongoose.model('Animal', animalSchema);
module.exports = animalModel;
