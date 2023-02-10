const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Reservation extends Model {}

Reservation.init({
    // TODO
    time_slot:{
        // string is of 255 characters
        // BREAKFAST, LUNCH, DINNER
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            isIn: [['breakfast', 'lunch', 'dinner']]
        }

    },
    day:{
        type:DataTypes.STRING

    }
        
    
    }, {
        sequelize


})

module.exports=Reservation