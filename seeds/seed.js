const sequelize = require('../config/connection');
const { Time, Metro, Trip, User } = require('../models');

const stationSeedData = require('./StationData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Metro.bulkCreate(stationSeedData, {
        individualHooks: true,
        returning: true,
    });

    process.exit();
}

seedDatabase();