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
    },
    // time_available
    time_available: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue:'10:00',
        // sunday morning Feb 10 2023 huddle specification:
        validate: {
         isIn:[['10:00', '11:00','12:00','13:00','14:00','15:00',
         '16:00','17:00','18:00','19:00','20:00','21:00','22:00',
         '23:00'
    ]]   
        }
    // expanded version:
    //     validate: {
    //      isIn:[['9:00', '9:30', '10:00', '10:30', '11:00','11:30',
    //      '12:00','12:30','13:00','13:30','14:00','14:30','15:00',
    //      '15:30','16:00','16:30','17:00','17:30','18:00','18:30',
    //      '19:00','19:30','20:00','20:30','21:00','21:30','22:00',
    //      '22:30','23:00','23:30'
    // ]]   
    //     }
    }
},{
    sequelize
});

module.exports= Reservation;