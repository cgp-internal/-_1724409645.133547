const express = require('express');
const router = express.Router();
const flightRequestRouter = require('./controllers/flightRequest');
const mapRouter = require('./controllers/map');

router.use('/flightRequest', flightRequestRouter);
router.use('/map', mapRouter);

module.exports = router;