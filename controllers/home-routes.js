const router = require('express').Router();
//* requireing Metro, City,and User models to display info within these models on home page
const { Metro, City, User } = require('../models');
const withAuth = require('../utils/auth');

//* home page (displaying metro data)
router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const metroData = await Metro.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                // {
                //     model: Time,
                //     attribute: ['local_time']
                // }

            ],
        });

        // Serialize data so the template can read it
        const metro = metroData.map((metro) => project.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            metro,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/metro/:id', async (req, res) => {
    try {
        const metroData = await Metro.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Time,
                    // attributes: ['stop_longitude', 'stop_latitude'],
                }
            ],
        });

        const metro = metroData.get({ plain: true });

        res.render('metro', {
            ...metro,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//* 'mymetro' is synonmous to 'profile' route
router.get('/mymetro', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Trip }],
        });

        const user = userData.get({ plain: true });

        res.render('mymetro', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//* login route
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/'); //* can you redirect to home page instead with '/'?
        return;
    }

    res.render('login');
});

module.exports = router;