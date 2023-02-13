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
    },
    // MenuId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     defaultValue: 1
    // }
}, {
    sequelize,
}

)

module.exports=Dish

// user_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: 'user',
//       key: 'id',
//     },
//   },
