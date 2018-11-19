const Animal = require('../models/animal');

function createComment(req, res, next) {
  console.log('anyone home?');
  Animal.findById(req.params.animalId)
    .then(animal => {
      req.body.user = req.tokenUserId;
      animal.comments.push(req.body);
      return animal.save();
    })
    .then(animal => Animal.populate(animal, 'ownedBy comments.user'))
    .then(animal => res.json(animal))
    .catch(next);
}

function deleteComment(req, res, next) {
  Animal.findById(req.params.animalId)
    .then(animal => {
      const comment = animal.comments.id(req.params.commentId);
      comment.remove();
      return animal.save();
    })
    .then(animal => Animal.populate(animal, 'ownedBy comments.user'))
    .then(animal => res.json(animal))
    .catch(next);
}

module.exports = {
  create: createComment,
  delete: deleteComment
};
