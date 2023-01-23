
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Metro extends Model {}

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
        allowNull: false,
        // Primary key?? Each stop is exclusive
    },
    line: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departure_time: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    arrival_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    street_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
        model: 'user',
        key: 'id',
    }
    },
    time_id: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
            model: 'user',
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

