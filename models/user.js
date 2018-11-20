const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  givenName: String,
  surname: String,
  location: String,
  // animalsOwned: [{
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'Animal'
  // }],
  profileImageUrl: String,
  age: Number,
  bio: String
});


userSchema.pre('save', function() {
  this.password = bcrypt.hashSync(this.password, 8);
});

userSchema.methods.validatePassword = function(attemptedPassword) {
  return bcrypt.compareSync(attemptedPassword, this.password);
};

userSchema.virtual('animalsOwned', {
  ref: 'Animal',
  localField: '_id',
  foreignField: 'owner'
});

userSchema.set('toJSON', {
  virtuals: true
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
