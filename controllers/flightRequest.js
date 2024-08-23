const express = require('express');
const router = express.Router();
const { processFlightRequest } = require('../services/flightService');

router.post('/request', async (req, res) => {
  try {
    const flightRequest = req.body;
    const result = await processFlightRequest(flightRequest);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'Error' });
  }
});

module.exports = router;