const mongoose = require('mongoose');
const env = require('../config/environment');
const Animal = require('../models/animal');
const User = require('../models/user');
const Booking = require('../models/booking');
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
    givenName: 'David',
    surname: 'Comer',
    password: 'pass'
  },
  {
    _id: userId[1],
    username: 'tkinnertova',
    email: 'tkinnertova@app.com',
    givenName: 'Tereza',
    surname: 'Kinnertova',
    password: 'pass'
  },
  {
    _id: userId[2],
    username: 'tbirch',
    email: 'tbirch@app.com',
    givenName: 'Theo',
    surname: 'Birch',
    password: 'pass'
  }
];

const animalData = [
  { name: 'Reggie', bio: 'I was found on the side of a motorway in Oxford when I was a pup. I hate direct eye contact and my favourite foods are bacon and cushions.', sex: 'Male', species: 'Dog', breed: ['Greyhound', 'Whippet'], age: 5, color: [ 'Brown', 'White'], imageUrl: 'https://imgur.com/bDBMlEA.png', location: 'B91 1NW', owner: userId[0], rating: [5, 5, 5, 5, 5] }
  // { name: 'Charlie', bio: 'I am so needy you can't even comprehend. My humans left the fridge open once and I ate two sticks of butter and an entire birthday cake. You best pay me your full attention on walks because I will absolutely roll in shit when you're not looking.', sex: 'Male', species: 'Dog', breed: ['Lurcher'], age: 3, color: [ 'Brown'], imageUrl: 'https://imgur.com/PBCkJJz.png', location: 'B91 1TR', owner: 'dcomer', rating: [1, 1, 1, 1, 1], availableOn: {} },
  // { name: 'Leila', bio: 'I am a dog too', sex: 'Female', species: 'Dog', breed: ['Labrador'], age: 11, color: [ 'Black'], imageUrl: 'https://imgur.com/DHwHBEF.png', location: 'HP5 1DL', owner: 'efarrer', rating: [5, 4, 5, 4, 4], availableOn: {} },
  // { name: 'Rocky II', bio: '', sex: 'Male', species: 'Dog', breed: ['German Shepherd'], age: 14, color: [ 'Black', 'Ginger' ], imageUrl: 'https://imgur.com/n1HT62i', location: 'W3 7JE', owner: 'amallah', rating: [], availableOn: {} },
  // { name: 'Whiskey', bio: '', sex: 'Male', species: 'Cat', breed: ['Domestic Shorthair'], age: 4, color: ['Ginger'], imageUrl: '', location: 'W3 7JE', owner: 'amallah', rating: [], availableOn: {} },
  // { name: 'Sylvester', bio: '', sex: 'Male', species: 'Cat', breed: ['Domestic Shorthair'], age: 3, color: ['White'], imageUrl: '', location: 'W3 7JE', owner: 'amallah', rating: [], availableOn: {} },
  // { name: 'Max', bio: '', sex: 'Male', species: 'Dog', breed: ['German Shepherd', 'Mamalute'], age: 1, color: ['Grey', 'White'], imageUrl: '', location: 'TN13 1AB ', owner: 'kadamson', rating: [], availableOn: {} },
  // { name: 'Nala', bio: '', sex: 'Female', species: 'Dog', breed: ['Border Collie'], age: 1, color: ['Brown'], imageUrl: '', location: 'TN13 1AB ', owner: 'kadamson', rating: [], availableOn: {} },
  // { name: 'Becky', bio: '', sex: 'Female', species: 'Snake', breed: ['Royal Python Morph'], age: 1, color: ['Black', 'Brown', 'White'], imageUrl: 'https://imgur.com/UJVcWq0', location: 'E16 1DQ', owner: 'fcoker', rating: [], availableOn: {} },
  // { name: 'Judas', bio: 'I'm a lover, not a biter. LOL, jk - monch monch bitch. NYOM NYOM NYOM.', sex: 'Male', species: 'Snake', breed: ['Royal Python Moprh'], age: 1, color: ['Black', 'Brown', 'White'], imageUrl: 'https://imgur.com/xwVn4c6', location: 'E16 1DQ', owner: 'fcoker', rating: [2, 1, 2], availableOn: {} },
  // { name: 'Albert', bio: '', sex: 'Male', species: 'Dog', breed: ['Staffordshire Bull Terrier'], age: 1, color: ['Black'], imageUrl: 'https://imgur.com/FP1DGqx', location: 'W6 0EZ', owner: 'tbirch', rating: [2, 1, 3, 2, 2], availableOn: {} },
  // { name: 'Sunny', bio: '', sex: 'Female', species: 'Dog', breed: ['Golden Retreiver'], age: 1, color: ['Golden'], imageUrl: '', location: '', owner: 'zbarrington', rating: [], availableOn: {} },
  // { name: 'Marley', bio: '', sex: 'Male', species: 'Dog', breed: ['Golden Labrador'], age: 1, color: ['Golden'], imageUrl: 'https://imgur.com/Ys81Fdy', location: 'SW19 7NL', owner: 'jlalley', rating: [], availableOn: {} },
  // { name: 'Lola', bio: '', sex: 'Female', species: 'Cat', breed: ['Domestic Shorthair'], age: 2, color: ['White'], imageUrl: 'https://imgur.com/G0hIEpO.png', location: 'BR1 1LX', owner: 'sshamsiddin', rating: [], availableOn: {} },
  // { name: 'Umi', bio: '', sex: 'Female', species: 'Cat', breed: ['Tabby'], age: 2, color: ['Grey', 'Black'], imageUrl: 'https://imgur.com/vc0D22W.png', location: 'BR1 1LX', owner: 'sshamsiddin', rating: [], availableOn: {} },
  // { name: 'Storm', bio: '', sex: 'Female', species: 'Dog', breed: ['Siberian Husky', 'Pomeranian'], age: 1, color: ['Grey', 'White'], imageUrl: 'https://imgur.com/oPZSQmD', location: '', owner: 'ahaizet', rating: [], availableOn: {} },
  // { name: 'Bonnie', bio: 'Born in the Swiss Alps, I have stubbornly expensive taste and will only eat my family’s favourite shoes. Widely considered Bishop Stortford's most useless guard dog, what I lack in ferociousess I make up for in loveability!', sex: 'Female', species: 'Dog', breed: ['Appenzeller'], age: 10, color: ['Black', 'Brown', 'White'], imageUrl: 'https://imgur.com/KTpGXKy.png', location: 'CB11 4LB', owner: 'sbarclay', rating: [5, 5, 5, 5, 5], availableOn: {} },
  // { name: 'Betsy', bio: '', sex: 'Female', species: 'Dog', breed: ['Border Collie'], age: 13, color: ['Black', 'Brown', 'White'], imageUrl: 'https://imgur.com/dUF9ewW.png', location: '69483', owner: 'iweiershauser', rating: [5, 5, 5, 5, 5], availableOn: {} }
];

Animal.collection.drop();
User.collection.drop();
Booking.collection.drop();

Animal.create(animalData)
  .then(animals => {
    console.log(`Created ${animals.length} animals`);
    User.create(userData)
      .then(user => {
        console.log(`Created ${user.length} users`);
        mongoose.connection.close();
      });
  });
