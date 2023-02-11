const {Reservation} = require('../models');

const reservationData = [
    {
        time_slots: "dinner",
        day: "friday",
        customer_id: 1
    },
];

const seedReservation = () => Reservation.bulkCreate(reservationData);

module.exports = seedReservation;