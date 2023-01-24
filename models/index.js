const Metro = require('./Metro');
const Time = require('./Time');
const Trip = require('./Trip');
const User = require('./User')

User.belongsToMany(Metro, {
  through: {
    model: Trip,
    unique: false
  },
  as: 'planned_trips'
});

Metro.belongsToMany(User, {
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  // as: 'metro_user'

});

Time.belongsToMany(User, {
  through: {
    model: Trip,
    unique: false
  },
  // as: 'metro_time'
});

module.exports = { Metro, User, Trip, Time };