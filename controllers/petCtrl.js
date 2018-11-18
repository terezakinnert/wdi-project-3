const Animal = require('../models/animal');

function indexRoute(req, res, next) {
  Animal.find().then(animals => res.json(animals))
    .catch(next);
}

function showRoute(req, res, next) {
  Animal.findById(req.params.id)
    .populate('animalsOwned')
    .then(animal => res.json(animal))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute
};
