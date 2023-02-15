const Customer = require("./Customer");
const Reservation = require("./Reservation");
const Owner = require("./Owner");
const Menu = require("./menu");
const Dish = require("./Dish");
const Time = require("./Time");

Owner.hasMany(Reservation);
Reservation.belongsTo(Owner);
//reference key: OwnerID

Menu.belongsTo(Owner);

Owner.hasMany(Dish);
Dish.belongsTo(Owner);

Customer.hasMany(Reservation);
Reservation.belongsTo(Customer);
//reference key: CustomerID

Owner.hasOne(Time);
Time.belongsTo(Owner);
//reference key: OwnerId

module.exports = {
  Customer,
  Reservation,
  Owner,
  Menu,
  Dish,
  Time,
};
