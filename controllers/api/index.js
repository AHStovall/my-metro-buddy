const router = require('express').Router();

const userRoutes = require('./user-routes');
const tripRoutes = require('./trip-routes')

router.use('/users', userRoutes);
router.use('/trips', tripRoutes);

module.exports = router;