const Customer = require("./Customer");
const Reservation = require("./Reservation");
const Owner = require("./Owner");

// Owner.hasMany(Reservation)
// Reservation.belongsTo(Owner)

Customer.hasMany(Reservation)
Reservation.belongsTo(Customer, {
    foreignKey: 'customer_id',
    onDelete:"CASCADE"
})

module.exports = {
    Customer,
    Reservation,
    Owner
}