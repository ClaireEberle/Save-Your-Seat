const {Reservation} = require('../models');

const reservationData = [
    {
        reservation_date: "2025-02-10",
        reservation_time: "15:00",
        party_size: 2,
        customer_id: 1,
        // owner_id: 1
    },
];

const seedReservation = () => Reservation.bulkCreate(reservationData);

module.exports = seedReservation;