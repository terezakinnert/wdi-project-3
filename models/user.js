const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  location: String,
  ownedAnimal: {
    type: mongoose.Schema.ObjectId,
    ref: 'Animal'
  },
  profileImageUrl: String,
  age: Number,
  bio: String
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
