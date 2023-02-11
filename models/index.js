const Customer = require("./Customer");
const Reservation = require("./Reservation");
const Owner = require("./Owner");

Owner.hasMany(Reservation)
Reservation.belongsTo(Owner)
//reference key: OwnerID

Customer.hasMany(Reservation)
Reservation.belongsTo(Customer)
//reference key: CustomerID

module.exports = {
    Customer,
    Reservation,
    Owner
}