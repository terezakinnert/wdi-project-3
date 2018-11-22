const mongoose = require('mongoose');
const moment = require('moment');
const env = require('../config/environment');
const Animal = require('../models/animal');
const User = require('../models/user');
const Booking = require('../models/booking');
mongoose.connect(env.dbUri);


const userId = [
  '5be9aa1bac3c11cea4303502',
  '5be9aa1bac3c11cea4303503',
  '5be9aa1bac3c11cea4303504',
  '5be9aa1bac3c11cea4303505',
  '5be9aa1bac3c11cea4303506',
  '5be9aa1bac3c11cea4303507',
  '5be9aa1bac3c11cea4303508',
  '5be9aa1bac3c11cea4303509'
];

const animalId = [
  '5bf4372642d7606cb408c567',
  '5bf4373042d7606cb408c568',
  '5bf4373042d7606cb408c569',
  '5bf4373042d7606cb408c56a',
  '5bf4373042d7606cb408c56b',
  '5bf4373042d7606cb408c56c',
  '5bf4373042d7606cb408c56d'
];

const bookingData = [
  {
    booker: userId[1],
    animal: animalId[0],
    pickup: moment().add(1, 'days'),
    dropoff: moment().add(2, 'days')
  },
  {
    booker: userId[2],
    animal: animalId[0],
    pickup: moment().subtract(2, 'days'),
    dropoff: moment().subtract(1, 'days')
  },
  {
    booker: userId[3],
    animal: animalId[0],
    pickup: moment().subtract(1, 'days'),
    dropoff: moment().add(1, 'days')
  },
  {
    booker: userId[0],
    animal: animalId[2],
    pickup: new Date(),
    dropoff: new Date()
  },
  {
    booker: userId[3],
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
    password: 'pass',
    profileImageUrl: 'https://i.pinimg.com/originals/a0/4e/04/a04e04e18eb82df58ab2fa73dd567fc5.png',
    age: '26',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    _id: userId[1],
    username: 'tkinnertova',
    email: 't@t',
    givenName: 'Tereza',
    surname: 'Kinnertova',
    password: 'pass',
    profileImageUrl: 'https://i.pinimg.com/originals/a0/4e/04/a04e04e18eb82df58ab2fa73dd567fc5.png',
    age: '27',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    _id: userId[2],
    username: 'efarrer',
    email: 'efarrer@app.com',
    givenName: 'Ellie',
    surname: 'Farrer',
    password: 'pass',
    profileImageUrl: 'https://i.pinimg.com/originals/a0/4e/04/a04e04e18eb82df58ab2fa73dd567fc5.png',
    age: '23',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    _id: userId[3],
    username: 'fcoker',
    email: 'fcoker@app.com',
    givenName: 'Femi',
    surname: 'Coker',
    password: 'pass',
    profileImageUrl: 'https://i.pinimg.com/originals/a0/4e/04/a04e04e18eb82df58ab2fa73dd567fc5.png',
    age: '30',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    _id: userId[4],
    username: 'sshamsiddin',
    email: 'sshamsiddin@app.com',
    givenName: 'Sham',
    surname: 'Shamsiddin',
    password: 'pass',
    profileImageUrl: 'https://i.pinimg.com/originals/a0/4e/04/a04e04e18eb82df58ab2fa73dd567fc5.png',
    age: '28',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    _id: userId[5],
    username: 'amallah',
    email: 'amallah@app.com',
    givenName: 'Aiman',
    surname: 'Mallah',
    password: 'pass',
    profileImageUrl: 'https://i.pinimg.com/originals/a0/4e/04/a04e04e18eb82df58ab2fa73dd567fc5.png',
    age: '25',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    _id: userId[6],
    username: 'sbarclay',
    email: 'sbarclay@app.com',
    givenName: 'Sophia',
    surname: 'Barclay',
    password: 'pass',
    profileImageUrl: 'https://i.pinimg.com/originals/a0/4e/04/a04e04e18eb82df58ab2fa73dd567fc5.png',
    age: '25',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    _id: userId[7],
    username: 'tbirch',
    email: 'tbirch@app.com',
    givenName: 'Theo',
    surname: 'Birch',
    password: 'pass',
    profileImageUrl: 'https://i.pinimg.com/originals/a0/4e/04/a04e04e18eb82df58ab2fa73dd567fc5.png',
    age: '32',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const animalData = [
  { _id: animalId[0], name: 'Reggie', bio: 'I was found on the side of a motorway in Oxford when I was a pup. I hate direct eye contact and my favourite foods are bacon and cushions.', sex: 'Boy', species: 'Dog', breed: ['Greyhound', 'Whippet'], age: 5, color: [ 'Brown', 'White'], imageUrl: 'https://imgur.com/bDBMlEA.png', location: 'B91 1NW', owner: userId[0] }
//   { _id: animalId[1], name: 'Charlie', bio: 'I am so needy you can\'t even comprehend. My humans left the fridge open once and I ate two sticks of butter and an entire birthday cake. You best pay me your full attention on walks because I will absolutely roll in shit when you\'re not looking.', sex: 'Boy', species: 'Dog', breed: ['Lurcher'], age: 3, color: [ 'Brown'], imageUrl: 'https://imgur.com/PBCkJJz.png', location: 'B91 1TR', owner: userId[0], rating: [1, 1, 1, 1, 1] },
//   { _id: animalId[2], name: 'Leila', bio: 'I am so performatively happy that I\'ve broken my tail twice by wagging it too enthusastically and hitting things. If you are eating cheese, ice cream, or cereal, watch your back. I have a particular affinity for senior citizens.', sex: 'Girl', species: 'Dog', breed: ['Labrador'], age: 11, color: [ 'Black'], imageUrl: 'https://imgur.com/DHwHBEF.png', location: 'HP5 1DL', owner: userId[2], rating: [5, 4, 5, 4, 4] },
//   { _id: animalId[3], name: 'Rocky II', bio: 'Speak up. I\'m almost too deaf to fuction. I have all the grace of an elephant at the ballet and if you stroke me, you will end up with a handful of fur', sex: 'Boy', species: 'Dog', breed: ['German Shepherd'], age: 14, color: [ 'Black', 'Ginger' ], imageUrl: 'https://imgur.com/n1HT62i.png', location: 'W3 7JE', owner: userId[5], rating: [5, 5, 5, 5, 5, 4] },
//   { _id: animalId[4], name: 'Whiskey', bio: '', sex: 'Boy', species: 'Cat', breed: ['Domestic Shorthair'], age: 4, color: ['Ginger'], imageUrl: 'https://imgur.com/1TMWV99.png', location: 'W3 7JE', owner: userId[5], rating: [] },
//   // { _id: animalId[5], name: 'Sylvester', bio: '', sex: 'Boy', species: 'Cat', breed: ['Domestic Shorthair'], age: 3, color: ['White'], imageUrl: '', location: 'W3 7JE', owner: userId[5], rating: [] },
//   // { name: 'Max', bio: '', sex: 'Boy', species: 'Dog', breed: ['German Shepherd', 'Mamalute'], age: 1, color: ['Grey', 'White'], imageUrl: '', location: 'TN13 1AB ', owner: 'kadamson', rating: [] },
//   // { name: 'Nala', bio: '', sex: 'Girl', species: 'Dog', breed: ['Border Collie'], age: 1, color: ['Brown'], imageUrl: '', location: 'TN13 1AB ', owner: 'kadamson', rating: [] },
//   { _id: animalId[8], name: 'Becky', bio: 'I will literally eat anything.', sex: 'Girl', species: 'Snake', breed: ['Royal Python Morph'], age: 5, color: ['Black', 'Brown', 'White'], imageUrl: 'https://imgur.com/UJVcWq0.png', location: 'E16 1DQ', owner: userId[3], rating: [5, 4, 4, 5, 5] },
//   { _id: animalId[9], name: 'Judas', bio: 'I\'m a lover, not a biter. LOL, jk - monch monch bitch.', sex: 'Boy', species: 'Snake', breed: ['Royal Python Morph'], age: 5, color: ['Black', 'Brown', 'White'], imageUrl: 'https://imgur.com/xwVn4c6.png', location: 'E16 1DQ', owner: userId[3], rating: [2, 1, 2, 1, 1] },
//   { _id: animalId[10], name: 'Albert', bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', sex: 'Boy', species: 'Dog', breed: ['Staffordshire Bull Terrier'], age: 7, color: ['Black'], imageUrl: 'https://imgur.com/FP1DGqx.png', location: 'W6 0EZ', owner: userId[7], rating: [2, 1, 3, 2, 2] },
//   // { name: 'Sunny', bio: '', sex: 'Girl', species: 'Dog', breed: ['Golden Retreiver'], age: 1, color: ['Golden'], imageUrl: '', location: '', owner: 'zbarrington', rating: [] },
//   // { name: 'Marley', bio: '', sex: 'Boy', species: 'Dog', breed: ['Golden Labrador'], age: 1, color: ['Golden'], imageUrl: 'https://imgur.com/Ys81Fdy', location: 'SW19 7NL', owner: 'jlalley', rating: [] },
//   // { name: 'Lola', bio: '', sex: 'Girl', species: 'Cat', breed: ['Domestic Shorthair'], age: 2, color: ['White'], imageUrl: 'https://imgur.com/G0hIEpO.png', location: 'BR1 1LX', owner: 'sshamsiddin', rating: [] },
//   { _id: animalId[14], name: 'Umi', bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', sex: 'Girl', species: 'Cat', breed: ['Tabby'], age: 2, color: ['Grey', 'Black'], imageUrl: 'https://imgur.com/vc0D22W.png', location: 'BR1 1LX', owner: userId[4], rating: [5, 4, 5] },
//   // { name: 'Storm', bio: '', sex: 'Girl', species: 'Dog', breed: ['Siberian Husky', 'Pomeranian'], age: 1, color: ['Grey', 'White'], imageUrl: 'https://imgur.com/oPZSQmD', location: '', owner: 'ahaizet', rating: [] },
//   { _id: animalId[16], name: 'Bonnie', bio: 'Born in the Swiss Alps, I have stubbornly expensive taste and will only eat my family’s favourite shoes. Widely considered Bishop Stortford\'s most useless guard dog, what I lack in ferociousess I make up for in loveability!', sex: 'Girl', species: 'Dog', breed: ['Appenzeller'], age: 10, color: ['Black', 'Brown', 'White'], imageUrl: 'https://imgur.com/KTpGXKy.png', location: 'CB11 4LB', owner: userId[6], rating: [5, 5, 3, 5, 5] }
//   // { name: 'Betsy', bio: '', sex: 'Girl', species: 'Dog', breed: ['Border Collie'], age: 13, color: ['Black', 'Brown', 'White'], imageUrl: 'https://imgur.com/dUF9ewW.png', location: '69483', owner: 'iweiershauser', rating: [5, 5, 5, 5, 5] }
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
