const Customer = require("./Customer");
const Reservation = require("./Reservation");
const Owner = require("./Owner");
const Menu = require("./menu");
const Dish = require("./Dish")

Owner.hasMany(Reservation)
Reservation.belongsTo(Owner)
//reference key: OwnerID

Owner.hasOne(Menu)
Menu.belongsTo(Owner)

Dish.belongsTo(Menu)

Customer.hasMany(Reservation)
Reservation.belongsTo(Customer)
//reference key: CustomerID



module.exports = {
    Customer,
    Reservation,
    Owner,
    Menu,
    Dish
}