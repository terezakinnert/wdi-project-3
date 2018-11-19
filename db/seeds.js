const mongoose = require('mongoose');
const env = require('../config/environment');
const Animal = require('../models/animal');
const User = require('../models/user');
mongoose.connect(env.dbUri);


const userId = [
  '5be9aa1bac3c11cea4303502',
  '5be9aa1bac3c11cea4303503',
  '5be9aa1bac3c11cea4303504',
  '5be9aa1bac3c11cea4303505'
];

const userData = [
  {
    _id: userId[0],
    username: 'dcomer',
    email: 'dcomer@app.com',
    password: 'pass'
  },
  {
    _id: userId[1],
    username: 'tkinnertova',
    email: 'tkinnertova@app.com',
    password: 'pass'
  },
  {
    _id: userId[2],
    username: 'tbirch',
    email: 'tbirch@app.com',
    password: 'pass'
  }
];

const animalData = [
  { name: 'Reggie', bio: 'I am a dog', sex: 'Male', species: 'Dog', breed: ['Greyhound', 'Whippet'], age: 5, colour: [ 'Brown', 'White'], imgUrl: 'https://imgur.com/bDBMlEA', location: 'B91 1NW', owner: userId[0], goodBad: [5, 5, 5, 5, 5], availableOn: {} },
  { name: 'Charlie', bio: 'I am also a dog', sex: 'Male', species: 'Dog', breed: ['Lurcher'], age: 3, colour: [ 'Brown'], imgUrl: '', location: 'B91 1NW', owner: 'dcomer', goodBad: [1, 1, 1, 1, 1], availableOn: {} },
  { name: 'Leila', bio: 'I am a dog too', sex: 'Female', species: 'Dog', breed: ['Labrador'], age: 11, colour: [ 'Black'], imgUrl: 'https://imgur.com/DHwHBEF', location: 'HP5 1DL', owner: 'efarrer', goodBad: [5, 4, 5, 4, 4], availableOn: {} },
  { name: 'Rocky', bio: '', sex: 'Male', species: 'Dog', breed: ['German Shepherd'], age: 13, colour: [ 'Black', 'Ginger' ], imgUrl: '', location: 'W3 7JE', owner: 'amallah', goodBad: [''], availableOn: {} },
  { name: 'Whiskey', bio: '', sex: 'Male', species: 'Cat', breed: ['Domestic Shorthair'], age: 4, colour: ['Ginger'], imgUrl: '', location: 'W3 7JE', owner: 'amallah', goodBad: [''], availableOn: {} },
  { name: 'Sylvester', bio: '', sex: 'Male', species: 'Cat', breed: ['Domestic Shorthair'], age: 3, colour: ['White'], imgUrl: '', location: 'W3 7JE', owner: 'amallah', goodBad: [''], availableOn: {} },
  { name: 'Max', bio: '', sex: 'Male', species: 'Dog', breed: ['Husky'], age: 1, colour: ['Grey', 'White'], imgUrl: '', location: 'TN13 1AB ', owner: 'kadamson', goodBad: [''], availableOn: {} },
  { name: 'Nala', bio: '', sex: 'Female', species: 'Dog', breed: [''], age: 1, colour: ['Brown'], imgUrl: '', location: 'TN13 1AB ', owner: 'kadamson', goodBad: [''], availableOn: {} },
  { name: 'Becky', bio: '', sex: 'Male', species: 'Snake', breed: ['Royal Python Moprh'], age: 1, colour: ['Black', 'Brown', 'White'], imgUrl: 'https://imgur.com/UJVcWq0', location: 'E16 1DQ', owner: 'fcoker', goodBad: [''], availableOn: {} },
  { name: 'Judas', bio: '', sex: 'Female', species: 'Snake', breed: ['Royal Python Moprh'], age: 1, colour: ['Black', 'Brown', 'White'], imgUrl: 'https://imgur.com/xwVn4c6', location: 'E16 1DQ', owner: 'fcoker', goodBad: [2, 1, 2], availableOn: {} },
  { name: 'Albert', bio: '', sex: 'Male', species: 'Dog', breed: ['Staffordshire Bull Terrier'], age: 1, colour: ['Black'], imgUrl: 'https://imgur.com/FP1DGqx', location: 'W6 0EZ', owner: 'tbirch', goodBad: [2, 1, 3, 2, 2], availableOn: {} },
  { name: 'Sunny', bio: '', sex: 'Female', species: 'Dog', breed: ['Golden Retreiver'], age: 1, colour: ['Golden'], imgUrl: '', location: '', owner: 'zbarrington', goodBad: [''], availableOn: {} },
  { name: 'Marley', bio: '', sex: 'Male', species: 'Dog', breed: ['Golden Labrador'], age: 1, colour: ['Golden'], imgUrl: 'https://imgur.com/Ys81Fdy', location: 'SW19 7NL', owner: 'jlalley', goodBad: [''], availableOn: {} },
  { name: 'Lola', bio: '', sex: 'Female', species: 'Cat', breed: ['Domestic Shorthair'], age: 2, colour: ['White'], imgUrl: 'https://imgur.com/G0hIEpO', location: '', owner: 'sshamsiddin', goodBad: [''], availableOn: {} },
  { name: 'Umi', bio: '', sex: 'Female', species: 'Cat', breed: ['Tabby'], age: 2, colour: ['Grey', 'Black'], imgUrl: 'https://imgur.com/vc0D22W', location: '', owner: 'sshamsiddin', goodBad: [''], availableOn: {} },
  { name: 'Storm', bio: '', sex: 'Female', species: 'Dog', breed: ['Husky', 'Pomeranian'], age: 1, colour: ['Grey', 'White'], imgUrl: 'https://imgur.com/oPZSQmD', location: '', owner: 'ahaizet', goodBad: [''], availableOn: {} }

];

Animal.collection.drop();
User.collection.drop();

Animal.create(animalData)
  .then(animals => {
    console.log(`Created ${animals.length} animals`);
    User.create(userData)
      .then(user => {
        console.log(`Created ${user.length} users`);
        mongoose.connection.close();
      });
  });
