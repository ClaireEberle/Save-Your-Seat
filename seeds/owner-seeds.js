const {Owner} = require('../models');

const OwnerData = [
    {
        restaurant_name: "The Wandering Hedgehog",
        open_time: "10:00",
        close_time: "23:00",
        table_capacity: 5,
        email: "owner@gmail.com",
        password: "password"
    },
];

const seedOwner = () => Owner.bulkCreate(OwnerData);

module.exports = seedOwner;
