const {Customer} = require('../models');

const customerData = [
    {
        email: "test@gmail.com",
        password: "joejoejoe"
    },
];

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;