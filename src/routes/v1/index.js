const express = require('express');

const userRoutes = require('./user-routes');
const eventRoutes = require('./event-routes');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/event', eventRoutes);

module.exports = router;