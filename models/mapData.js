const mongoose = require('mongoose');

const mapDataSchema = new mongoose.Schema({
  polygonBoundaries: {
    type: [{ type: [Number], required: true }],
    required: true
  },
  flightRequestInformation: {
    type: [{ type: String, required: true }],
    required: true
  }
});

const MapData = mongoose.model('MapData', mapDataSchema);

module.exports = MapData;