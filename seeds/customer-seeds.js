const {Customer} = require('../models');

const customerData = [
    {
        //name: "joe",
        email: "test@gmail.com",
        password: "joejoejoe"
    },
    {
        //name: "hieu",
        email: "hieu12@gmail.com",
        password: "hieuhieuhieu"
    }
];

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;