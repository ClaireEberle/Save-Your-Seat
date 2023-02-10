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
    reservation_date:{
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull:false,
    },
    reservation_time:{
        type:DataTypes.TIME,
        allowNull:false,
    },
    party_size:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model:'customer',
          key: 'id',
        }
    },
    owner_id: {
        type: DataTypes.INTEGER,
        references: {
          model:'owner',
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