const router = require('express').Router();
const { Metro, User } = require('../models');
const withAuth = require('../utils/auth');
const { route } = require('./trip-routes');

router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const metroData = await Metro.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },

            ],
        });

        // Serialize data so the template can read it
        const metros = metroData.map((metro) => metro.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            metros,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//* route to create new metro route (will associate with user to serve as "trips" instead of connecting own trip model)

router.post('/', withAuth, async (req, res) => {
    try {
        const newMetro = await Metro.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newMetro);
    } catch (err) {
        res.status(400).json(err);
    }
});
//* route to delete a metro 'trip' data
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const metroData = await Metro.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!metroData) {
            res.status(404).json({ message: 'No metro found with this id!' });
            return;
        }

        res.status(200).json(metroData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;