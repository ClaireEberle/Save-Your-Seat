const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Dish extends Model {}

Dish.init({
    dishes :{
        type: DataTypes.STRING,
        allowNull: false,
    },
    side :{
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    hooks:{
        beforeCreate:userObj=>{
            userObj.password = bcrypt.hashSync(userObj.password,4);
            return userObj;
        }
    }
}

)

module.exports=Dish