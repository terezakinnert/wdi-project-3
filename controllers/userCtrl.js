const User = require('../models/user');

function showProfileRoute(req, res, next) {
  User.findById(req.params.id)
    .populate('animalsOwned')
    .then(user => {
      res.json(user);
    })
    .catch(next);
}

module.exports = {
  show: showProfileRoute
};
