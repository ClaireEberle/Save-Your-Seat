const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Reservation extends Model {}

Reservation.init({
    reservation_date:{
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull:false,
    },
    reservation_time:{
        type:DataTypes.TIME,
        defaultValue: DataTypes.NOW,
        allowNull:false
    },
    //CONSIDER MOVE party_size TO CUSTOMER TABLE
    party_size:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    }},   
{
    sequelize
});

module.exports= Reservation;