const router = require('express').Router();
// const env = require('./environment');
// const jwt = require('jsonwebtoken');

const authCtrl = require('../controllers/authCtrl');

// function secureRoute(req, res, next) {
//   if(!req.headers.authorization)
//     res.status(401).json({ message: 'Unauthorised user'});
//   const token = req.headers.authorization.replace('Bearer ', '');
//   jwt.verify(token, env.secret, function(err) {
//     if (err) {
//       res.status(401).json({ message: 'Unauthorised user'});
//     } else {
//       req.tokenUserId = jwt.decode(token).sub;
//       next();
//     }
//   });
// }

router.route('/register')
  .post(authCtrl.register);

router.route('/login')
  .post(authCtrl.login);



module.exports = router;
