const Customer = require("./Customer");
const Reseravation = require("./Reservation");
const Owner = require("./Owner");

Owner.hasmany(Reseravation)
Reseravation.hasmany(Customer)

Reseravation.belongsTo(Customer)
Customer.belongsTo(Owner)

module.exports = {
    Customer,
    Reseravation,
    Table
}