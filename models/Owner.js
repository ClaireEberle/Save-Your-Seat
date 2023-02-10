const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Owner extends Model {}

Owner.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    open_time:{
        type: DataTypes.DATE,
        allowNull:false,
    },
    close_time: {
        type: DataTypes.DATE,
        allowNull:false,
    },
    table_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'owner',
})

module.exports=Owner