const {Reseravation} = require('../models');

const reservationData = [
    {
        time_slots: "dinner",
        day: "friday",
        customer_id: 1
    },
];

const seedReservation = () => Reseravation.bulkCreate(reservationData);

module.exports = seedReservation;