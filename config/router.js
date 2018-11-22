const router = require('express').Router();
const env = require('./environment');
const jwt = require('jsonwebtoken');

const authCtrl = require('../controllers/authCtrl');
const userCtrl = require('../controllers/userCtrl');
const petCtrl = require('../controllers/petCtrl');
const commentsCtrl = require('../controllers/commentsCtrl');
const bookingCtrl = require('../controllers/bookingCtrl');

function secureRoute(req, res, next) {
  if(!req.headers.authorization)
    res.status(401).json({ message: 'Unauthorised user'});
  const token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, env.secret, function(err) {
    if (err) {
      res.status(401).json({ message: 'Unauthorised user'});
    } else {
      req.tokenUserId = jwt.decode(token).sub;
      next();
    }
  });
}

router.route('/register')
  .post(authCtrl.register);

router.route('/login')
  .post(authCtrl.login);

router.route('/users/:id')
  .get(userCtrl.show)
  .put(secureRoute, userCtrl.userUpdate);
// the reason this didn't run before: we didn't have any seeds in! (so it couldn't find animal => threw an error)

router.route('/users/:id')
  .delete(secureRoute, userCtrl.userDelete);

router.route('/users')
  .get(userCtrl.usersIndex);

router.route('/pets')
  .get(petCtrl.index)
  .post(secureRoute, petCtrl.create);

router.route('/pets/:id')
  .get(petCtrl.show)
  .put(secureRoute, petCtrl.update)
  .delete(secureRoute, petCtrl.delete);

router.route('/pets/:animalId/comments')
  .post(secureRoute, commentsCtrl.create);

router.route('/pets/:animalId/comments/:commentId')
  .delete(secureRoute, commentsCtrl.delete);

router.route('/pets/:animalId/bookings')
  .post(secureRoute, bookingCtrl.create)
  .get(bookingCtrl.index);

router.route('/pets/:animalId/bookings/:bookingId')
  .delete(bookingCtrl.delete);

module.exports = router;
