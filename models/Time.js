const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Time extends Model {}

Time.init({
    date:{
        type: DataTypes.DATEONLY
    },
    time_available:{
        type:DataTypes.TIME
    }
},{
    sequelize
});

module.exports = Time;