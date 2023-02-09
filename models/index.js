const Customer = require("./Customer");
const Reseravation = require("./Reservation");
const Table = require("./Table");

Table.hasmany(Reseravation)
Reseravation.hasmany(Reseravation)

Reseravation.belongsTo(Customer)
Customer.belongsTo(time_slot)

module.exports = {
    Customer,
    Reseravation,
    Table
}