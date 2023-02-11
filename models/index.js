const Customer = require("./Customer");
const Reservation = require("./Reservation");
const Owner = require("./Owner");
const Menu = require("./Menu");

Owner.hasMany(Reservation)
Reservation.belongsTo(Owner, {
    foreignKey: 'owner_id',
    onDelete:"CASCADE"
})

Customer.hasMany(Reservation)
Reservation.belongsTo(Customer, {
    foreignKey: 'customer_id',
    onDelete:"CASCADE"
})

Menu.belongsTo(Owner, {
    foreignKey: 'owner_id',
    onDelete:"CASCADE"
})

module.exports = {
    Customer,
    Reservation,
    Owner,
    Menu
}