// optional menu class

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Menu extends Model {}

Menu.init({
    // TODO
})