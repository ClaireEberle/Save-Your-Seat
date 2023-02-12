const Customer = require("./Customer");
const Reservation = require("./Reservation");
const Owner = require("./Owner");
const Menu = require("./Menu");
const Dish = require("./Dish")

Owner.hasMany(Reservation)
Reservation.belongsTo(Owner)
//reference key: OwnerID

Customer.hasMany(Reservation)
Reservation.belongsTo(Customer)
//reference key: CustomerID

Menu.belongsTo(Owner, {
    foreignKey: 'owner_id',
    onDelete:"CASCADE"
})

Dish.belongsTo(Menu, {
    foreignKey: 'menu_id',
    onDelete:"CASCADE"
})

module.exports = {
    Customer,
    Reservation,
    Owner,
    Menu,
    Dish
}