const router = require('express').Router();

const userRoutes = require('./user-routes');
// const metroRoutes = require('./metro-routes');
const tripRoutes = require('./trip-routes')


router.use('/users', userRoutes);
router.use('/trip', tripRoutes);
router.use('/trips', tripRoutes);

module.exports = router;