const {Reservation} = require('../models');

const reservationData = [
    {
        reservation_date: "2025-02-10",
        reservation_time: "15:00",
        party_size: 2,
        time_available: "15:00",
        CustomerId: 1,
        OwnerId: 1
    }
];

const seedReservation = () => Reservation.bulkCreate(reservationData);

module.exports = seedReservation;