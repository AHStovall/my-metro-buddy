const sequelize = require('../config/connection');
const { Time, Metro, Trip, User } = require('../models');

//* for practicing with small amount of data with user_id and trip_id added manually to connect User model
const stationSeedData = require('./StationData.json')
// const stationSeedData = require('./someStationData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Metro.bulkCreate(stationSeedData, {
        individualHooks: true,
        returning: true,
    });

    process.exit();
}

seedDatabase();