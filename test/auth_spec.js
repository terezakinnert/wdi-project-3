/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');

const userIds = [
  '5be9aa1bac3c11cea4303502'
];


let user;

const userData = [
  {
    _id: userId[0],
    username: 'dcomer',
    email: 'dcomer@app.com',
    givenName: 'David',
    surname: 'Comer',
    password: 'pass',
    profileImageUrl: 'https://imgur.com/ZsWMfLz.png',
    age: '26',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },


  describe('user REGISTER', () => {


    beforeEach(done => {
      User
      .remove({})
      .then(() => User.create(userData))
      .then(_user => {
        user = _user;
        done()
      });
    });



      it('should return an object', done => {
        api.post('/api/register')
          .send(userData)
          .end((err, res) => {
            expect(res).to.be.an('object');
            done();
          });
      });


      it('should return the correct message', done => {
        api.post('/api/login')
          .send(userData)
          .end((err, res) => {
            expect(res.body.message).to.eq(`Welcome back ${userData.username}`);
            done();
          });
      });
    });

    it('should return a valid token', done => {
      api.post('/api/login')
        .send(userData)
        .end((err, res) => {
          expect(res.body.token).to.eq(userData.token);
          done();
        });
    });

    it('should return a 401 response if password is invalid', done => {
      api.post('/api/login')
        .send(userData)
        .end((err, res) => {
          expect(res.body.password).to.not.eq(userData.password);
          expect(res.status).to.eq(401);
          done();
        });
    });
