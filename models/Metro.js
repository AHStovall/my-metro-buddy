
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Metro extends Model { }

Metro.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        metro_name: {
            type: DataTypes.STRING,
            allowNull: true,
            // Primary key?? Each stop is exclusive
        },
        line: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        departure_time: {
            type: DataTypes.INTEGER,
            allowNull: true,

        },
        arrival_time: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        street_address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        time_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'time',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'metro',
    }
);

module.exports = Metro

