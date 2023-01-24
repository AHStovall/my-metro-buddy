
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model { }

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // start_trip_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'metro',
    //     key: 'id',
    // }
    // },
    // stop_trip_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'metro',
    //     key: 'id',
    // }
    // },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    metro_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'metro',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip',
  }
);

module.exports = Trip;

