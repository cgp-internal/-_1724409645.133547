const express = require('express');
const router = express.Router();
const { getMapData, setMapData } = require('../services/mapService');

router.get('/map-data', async (req, res) => {
  try {
    const data = await getMapData();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving map data' });
  }
});

router.post('/map-data', async (req, res) => {
  try {
    const result = await setMapData(req.body);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error setting map data' });
  }
});

module.exports = router;