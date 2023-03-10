const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")


class Owner extends Model {}

Owner.init({
    restaurant_name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    open_time:{
        type: DataTypes.TIME,
        allowNull:false,
    },
    close_time: {
        type: DataTypes.TIME,
        allowNull:false,
    },
    table_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
    }
}, {
    sequelize,
    hooks:{
        beforeCreate:userObj=>{
            userObj.password = bcrypt.hashSync(userObj.password,4);
            return userObj;
        }
    }
})

module.exports=Owner