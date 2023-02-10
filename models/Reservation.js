const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Reservation extends Model {}

Reservation.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    time_slot:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            isIn: [['breakfast', 'lunch', 'dinner']]
        }
    },
    day:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            isIn: [['monday', 'tuesday', 'wednesday','thrusday','friday','saturday','sunday']]
        }
    },
    customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model:'customer',
          key: 'id',
        }
    }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reservation',
});

module.exports= Reservation;