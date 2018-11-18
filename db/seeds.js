const mongoose = require('mongoose');
const Animal = require('../models/Animal');
// const User = require('../models/user');
const env = require('../config/environment');
mongoose.connect(env.dbUri);

const animalData = [
  {
    name: 'Pudgy',
    bio: 'cool doggo',
    sex: 'Female',
    species: 'Dog',
    breed: 'Husky',
    age: 3,
    color: ['black', 'brown'],
    // imageUrl: ,
    rating: 5
    // comments: [{
    //   text: String,
    //   user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'User'
    //   }
    // }]
  }];


Animal.collection.drop();

Animal.create(animalData)
  .then(animals => {
    console.log(`Created ${animals.length} animals`);
    mongoose.connection.close();
  });
