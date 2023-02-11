const {Customer} = require('../models');

const customerData = [
    {
        email: "test@gmail.com",
        password: "joejoejoe"
    },
    {
        email: "hieu12@gmail.com",
        password: "hieuhieuhieu"
    }
];

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;