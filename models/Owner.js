const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Owner extends Model {}

Owner.init({
    // TODO
    // next priorty
    table_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    }


}, {
    sequelize
})