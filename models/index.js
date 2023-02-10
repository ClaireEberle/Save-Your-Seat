const Customer = require("./Customer");
const Reseravation = require("./Reservation");
const Owner = require("./Owner");

Owner.hasMany(Reseravation)

// This was from refencing excaliber
Customer.hasMany(Reseravation)

// Zoom recording Tuesday February 7 2023
// Sequelize associations
// Basketball API
Reseravation.belongsTo(Customer)
Reseravation.belongsTo(Owner)

module.exports = {
    Customer,
    Reseravation,
    Owner
}