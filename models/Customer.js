const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Customer extends Model {}

Customer.init({
    // TODO
    // first priorty
    // email: "test@gmail.com",
    // phonenumber: 2065555555
    email :{
    type: DataTypes.STRING,
    allowNull: false
    },

    phonenumber: {
        type:DataTypes.STRING,
        allowNull: false

    }
}, {
    sequelize
}

)

module.exports=Customer