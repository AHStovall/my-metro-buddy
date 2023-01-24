const Metro = require('./Metro');
const Time = require('./Time');
const Trip = require('./Trip');
const User = require('./User');
  
  Metro.belongsToMany(User, {
    through: {
      model: Trip,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'metro_user'
  });

  Time.belongsToMany(User, {
    through: {
      model: Trip,
      unique: false
    },
    as: 'metro_time'
  });

module.exports = { Metro, User, Trip, Time };