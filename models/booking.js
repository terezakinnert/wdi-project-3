const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
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

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
