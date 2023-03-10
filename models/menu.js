const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Menu extends Model {}

Menu.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    //   ,
    //   OwnerId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     defaultValue: 1
    //   }
}, {
    sequelize
    // ,
    // timestamps: false,
    // freezeTableName: true,
    // underscored: true,
    // modelName:'menu'
})

module.exports=Menu