const Animal = require('../models/animal');

function createReview(req, res, next) {
  Animal.findById(req.params.animalId)
    .then(animal => {
      req.body.user = req.tokenUserId;
      animal.reviews.push(req.body);
      return animal.save();
    })
    .then(animal => Animal.populate(animal, 'owner reviews reviews.user.username'))
    .then(animal => res.json(animal))
    .catch(next);
}

function deleteReview(req, res, next) {
  Animal.findById(req.params.animalId)
    .then(animal => {
      const review = animal.reviews.id(req.params.reviewId);
      console.log('animal?', animal);
      review.remove();
      return animal.save();
    })
    .then(animal => Animal.populate(animal, 'owner reviews'))
    .then(animal => res.json(animal))
    .catch(next);
}

module.exports = {
  create: createReview,
  delete: deleteReview
};
