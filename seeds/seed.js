const sequelize = require('../config/connection');
const { Time, Metro, Trip, User } = require('../models');

//* for practicing with small amount of data with user_id and trip_id added manually to connect User model
// const stationSeedData = require('./StationData.json')
const stationSeedData = require('./someStationData.json')
const userData = require('./userData.json')
const tripData = require('./tripData.json')
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    //* order matters
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    })

    await Metro.bulkCreate(stationSeedData, {
        individualHooks: true,
        returning: true,

    });

    await Trip.bulkCreate(tripData, {
        individualHooks: true,
        returning: true,
    })




    process.exit();
}

seedDatabase();