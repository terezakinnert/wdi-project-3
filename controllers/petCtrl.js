const Animal = require('../models/animal');

function indexRoute(req, res, next) {
  Animal.find().then(animals => res.json(animals))
    .catch(next);
}

function showRoute(req, res, next) {
  Animal.findById(req.params.id)
    .populate('owner bookings')
    .then(animal => res.json(animal))
    .catch(next);
}

function createRoute(req, res, next) {
  Animal.create(req.body)
    .then(animal => res.json(animal))
    .catch(next);
}

function updateRoute(req, res, next) {
  Animal.findById(req.params.id)
    .then(animal => animal.set(req.body))
    .then(animal => animal.save())
    .then(animal => res.json(animal))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Animal.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
