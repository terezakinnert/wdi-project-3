const User = require('../models/user');
const jwt = require('jsonwebtoken');
const env = require('../config/environment');

function register(req, res, next) {
  User.create(req.body)
    .then(user => res.json({
      message: `Welcome, ${user.username}`
    }))
    .catch(next);
}

function login(req, res, next) {
  User.findOne({ email: req.body.email})
    .then(user => {
      if (user && user.validatePassword(req.body.password)) {
        const token = jwt.sign({
          username: user.username,
          sub: user._id
        }, env.secret, { expiresIn: '6d' });
        res.json({
          message: `Welcome back, ${user.username}`,
          token: token,
          id: user._id
        });
      } else {
        res.status(401).json({
          message: 'Unauthorised'
        });
      }
    })
    .catch(next);
}

module.exports = {
  register: register,
  login: login
};
