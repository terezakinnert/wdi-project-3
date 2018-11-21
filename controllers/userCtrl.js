const User = require('../models/user');

function showProfileRoute(req, res, next) {
  User.findById(req.params.id)
    .populate('animalsOwned')
    .then(user => {
      res.json(user);
    })
    .catch(next);
}

function usersIndex(req, res, next) {
  User
    .find()
    .populate('user animalsOwned ')
    .then(users => res.json(users))
    .catch(next);
}

function userUpdate(req, res, next) {
  User.findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  show: showProfileRoute,
  usersIndex: usersIndex,
  userUpdate: userUpdate
};
