const Animal = require('../models/animal');

function indexRoute(req, res, next) {
  Animal.find().then(animals => res.json(animals))
    .catch(next);
}


module.exports = {
  index: indexRoute
};
