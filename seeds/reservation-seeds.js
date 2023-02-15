const {Reservation} = require('../models');

const reservationData = [
    {
        reservation_date: "2023-02-10",
        reservation_time: "15:00",
        party_size: 2,
        time_available: "15:00",
        CustomerId: 1,
        OwnerId: 1
    },
    {
        reservation_date: "2023-02-20",
        reservation_time: "18:00",
        party_size: 3,
        time_available: "18:00",
        CustomerId: 1,
        OwnerId: 1
    },
    {
        reservation_date: "2023-02-21",
        reservation_time: "19:00",
        party_size: 4,
        time_available: "10:00",
        CustomerId: 1,
        OwnerId: 1
    },
];

const seedReservation = () => Reservation.bulkCreate(reservationData);

module.exports = seedReservation;