const Booking = require('../models/booking');

function createBooking(req, res, next) {
  Booking.create(req.body)
    .then(booking => res.json(booking))
    .catch(next);
}

function updateBooking(req, res, next) {
  Booking.findById(req.params.id)
    .then(booking => booking.set(req.body))
    .then(booking => booking.save())
    .then(booking => res.json(booking))
    .catch(next);
}

function deleteBooking(req, res, next) {
  Booking.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  create: createBooking,
  update: updateBooking,
  delete: deleteBooking
};
