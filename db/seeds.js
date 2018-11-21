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

const animalId = [
  '5bf4372642d7606cb408c567',
  '5bf4373042d7606cb408c568',
  '5bf4373042d7606cb408c569',
  '5bf4373042d7606cb408c56a'
];

const bookingData = [
  {
    booker: userId[1],
    animal: animalId[0],
    pickup: new Date(),
    dropoff: new Date()
  },
  {
    booker: userId[0],
    animal: animalId[2],
    pickup: new Date(),
    dropoff: new Date()
  }
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
    username: 'efarrer',
    email: 'efarrer@app.com',
    givenName: 'Ellie',
    surname: 'Farrer',
    password: 'pass'
  },
  {
    _id: userId[3],
    username: 'fcoker',
    email: 'fcoker@app.com',
    givenName: 'Femi',
    surname: 'Coker',
    password: 'pass'
  },
  {
    _id: userId[4],
    username: 'sshamsiddin',
    email: 'sshamsiddin@app.com',
    givenName: 'Sham',
    surname: 'Shamsiddin',
    password: 'pass'
  }
];

const animalData = [
  { _id: animalId[0], name: 'Reggie', bio: 'I was found on the side of a motorway in Oxford when I was a pup. I hate direct eye contact and my favourite foods are bacon and cushions.', sex: 'Boy', species: 'Dog', breed: ['Greyhound', 'Whippet'], age: 5, color: [ 'Brown', 'White'], imageUrl: 'https://imgur.com/bDBMlEA.png', location: 'B91 1NW', owner: userId[0], rating: [5, 5, 5, 5, 5] },
  { _id: animalId[1], name: 'Charlie', bio: 'I am so needy you can\'t even comprehend. My humans left the fridge open once and I ate two sticks of butter and an entire birthday cake. You best pay me your full attention on walks because I will absolutely roll in shit when you\'re not looking.', sex: 'Boy', species: 'Dog', breed: ['Lurcher'], age: 3, color: [ 'Brown'], imageUrl: 'https://imgur.com/PBCkJJz.png', location: 'B91 1TR', owner: userId[0], rating: [1, 1, 1, 1, 1] },
  { _id: animalId[2], name: 'Leila', bio: 'I am such a happy doggie that I have broken my tail twice from wagging it too hard and hitting things. I love food, and if you are eating cheese, ice cream, or even cereal, you best give me some! At least I don’t eat stones anymore, I grew out of that puppy habit. I have a particular affinity for senior citizens, I love them!', sex: 'Girl', species: 'Dog', breed: ['Labrador'], age: 11, color: [ 'Black'], imageUrl: 'https://imgur.com/DHwHBEF.png', location: 'HP5 1DL', owner: userId[2], rating: [5, 4, 5, 4, 4] },
  // { name: 'Rocky II', bio: '', sex: 'Boy', species: 'Dog', breed: ['German Shepherd'], age: 14, color: [ 'Black', 'Ginger' ], imageUrl: 'https://imgur.com/n1HT62i', location: 'W3 7JE', owner: 'amallah', rating: [] },
  // { name: 'Whiskey', bio: '', sex: 'Boy', species: 'Cat', breed: ['Domestic Shorthair'], age: 4, color: ['Ginger'], imageUrl: '', location: 'W3 7JE', owner: 'amallah', rating: [] },
  // { name: 'Sylvester', bio: '', sex: 'Boy', species: 'Cat', breed: ['Domestic Shorthair'], age: 3, color: ['White'], imageUrl: '', location: 'W3 7JE', owner: 'amallah', rating: [] },
  // { name: 'Max', bio: '', sex: 'Boy', species: 'Dog', breed: ['German Shepherd', 'Mamalute'], age: 1, color: ['Grey', 'White'], imageUrl: '', location: 'TN13 1AB ', owner: 'kadamson', rating: [] },
  // { name: 'Nala', bio: '', sex: 'Girl', species: 'Dog', breed: ['Border Collie'], age: 1, color: ['Brown'], imageUrl: '', location: 'TN13 1AB ', owner: 'kadamson', rating: [] },
  { name: 'Becky', bio: 'I will literally eat anything.', sex: 'Girl', species: 'Snake', breed: ['Royal Python Morph'], age: 5, color: ['Black', 'Brown', 'White'], imageUrl: 'https://imgur.com/UJVcWq0.png', location: 'E16 1DQ', owner: userId[3], rating: [5, 4, 4, 5, 5] },
  { name: 'Judas', bio: 'I\'m a lover, not a biter. LOL, jk - monch monch bitch.', sex: 'Boy', species: 'Snake', breed: ['Royal Python Morph'], age: 5, color: ['Black', 'Brown', 'White'], imageUrl: 'https://imgur.com/xwVn4c6.png', location: 'E16 1DQ', owner: userId[3], rating: [2, 1, 2, 1, 1] },
  // { name: 'Albert', bio: '', sex: 'Boy', species: 'Dog', breed: ['Staffordshire Bull Terrier'], age: 1, color: ['Black'], imageUrl: 'https://imgur.com/FP1DGqx', location: 'W6 0EZ', owner: 'tbirch', rating: [2, 1, 3, 2, 2] },
  // { name: 'Sunny', bio: '', sex: 'Girl', species: 'Dog', breed: ['Golden Retreiver'], age: 1, color: ['Golden'], imageUrl: '', location: '', owner: 'zbarrington', rating: [] },
  // { name: 'Marley', bio: '', sex: 'Boy', species: 'Dog', breed: ['Golden Labrador'], age: 1, color: ['Golden'], imageUrl: 'https://imgur.com/Ys81Fdy', location: 'SW19 7NL', owner: 'jlalley', rating: [] },
  // { name: 'Lola', bio: '', sex: 'Girl', species: 'Cat', breed: ['Domestic Shorthair'], age: 2, color: ['White'], imageUrl: 'https://imgur.com/G0hIEpO.png', location: 'BR1 1LX', owner: 'sshamsiddin', rating: [] },
  { name: 'Umi', bio: '', sex: 'Girl', species: 'Cat', breed: ['Tabby'], age: 2, color: ['Grey', 'Black'], imageUrl: 'https://imgur.com/vc0D22W.png', location: 'BR1 1LX', owner: userId[4], rating: [5, 4, 5] }
  // { name: 'Storm', bio: '', sex: 'Girl', species: 'Dog', breed: ['Siberian Husky', 'Pomeranian'], age: 1, color: ['Grey', 'White'], imageUrl: 'https://imgur.com/oPZSQmD', location: '', owner: 'ahaizet', rating: [] },
  // { name: 'Bonnie', bio: 'Born in the Swiss Alps, I have stubbornly expensive taste and will only eat my family’s favourite shoes. Widely considered Bishop Stortford's most useless guard dog, what I lack in ferociousess I make up for in loveability!', sex: 'Girl', species: 'Dog', breed: ['Appenzeller'], age: 10, color: ['Black', 'Brown', 'White'], imageUrl: 'https://imgur.com/KTpGXKy.png', location: 'CB11 4LB', owner: 'sbarclay', rating: [5, 5, 5, 5, 5] },
  // { name: 'Betsy', bio: '', sex: 'Girl', species: 'Dog', breed: ['Border Collie'], age: 13, color: ['Black', 'Brown', 'White'], imageUrl: 'https://imgur.com/dUF9ewW.png', location: '69483', owner: 'iweiershauser', rating: [5, 5, 5, 5, 5] }
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
        Booking.create(bookingData)
          .then(bookings => {
            console.log(`Created ${bookings.length} bookings`);
            mongoose.connection.close();
          });
      });
  });
