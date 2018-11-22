/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const { secret } = require('../../config/environment');

const Animal = require('../../models/animal');

const userIds = [
  '5bf17051d4a071297aa4b6ea'
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
        user: userId[1]
      }, {
        rating: 2,
        text: 'Ok',
        user: userId[2]
      }
    ]
  },

let token;

describe('Animal CREATE', () => {

  beforeEach(done => {
    Animal.remove({})
      .then(() => User.remove({}))
      .then(() => User.create({
        email: 'test',
        username: 'test',
        password: 'test'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
        done();
      });
  });

  it('should return a 401 response without a token', done => {
    api.post('/api/movies')
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 200 response', done => {
    api.post('/api/movies')
      .set('Authorization', `Bearer ${token}`)
      .send(movieData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.post('/api/movies')
      .set('Authorization', `Bearer ${token}`)
      .send(movieData)
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.post('/api/movies')
      .set('Authorization', `Bearer ${token}`)
      .send(movieData)
      .end((err, res) => {
        expect(res.body.name).to.eq(movieData.name);
        expect(res.body.image).to.eq(movieData.image);
        expect(res.body.yearReleased).to.eq(movieData.yearReleased);
        done();
      });
  });
});
