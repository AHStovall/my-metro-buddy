const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Time extends Model {}

Time.init(
    {
    id: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
    arrival_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    departure_time: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'time',
    }
    );
module.exports = Time;