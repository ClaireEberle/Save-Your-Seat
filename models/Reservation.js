const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Reservation extends Model {}

Reservation.init({
    // TODO
})