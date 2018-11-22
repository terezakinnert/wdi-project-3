/* global api, expect, describe, it, beforeEach */

const Animal = require('../../models/animal');

const userIds = [
  '5be9aa1bac3c11cea4303502'
];

const animalData = [
  {
    _id: animalId[0],
    name: 'Reggie',
    bio: 'I was found on the side of a motorway in Oxford when I was a pup. I hate direct eye contact and my favourite foods are bacon and cushions.',
    sex: 'Boy',
    species: 'Dog',
    breed: ['Greyhound', 'Whippet'],
    age: 5,
    color: [ 'Brown', 'White'],
    imageUrl: 'https://imgur.com/bDBMlEA.png',
    location: 'B91 1NW',
    owner: userId[0],
    reviews: [
      {
        rating: 5,
        text: 'Nice',
        user: userId[0]
      }, {
        rating: 2,
        text: 'Ok',
        user: userId[0]
      }
    ]
  }
];

let token;
let animalId;

describe('Animal SHOW', () => {

  beforeEach(done => {
    Animal.remove({})
      .then(() => Animal.create(animalData))
      .then(animal => {
        animalId = animal._id;
        done();
      });
  });

  it('should return a 200 response', done => {
    api.get(`/api/pets/${animalId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.get(`/api/pets/${animalId}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

});
