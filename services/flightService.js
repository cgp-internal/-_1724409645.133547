const db = require('../db');

async function processFlightRequest(flightRequest) {
  try {
    // Retrieve polygon boundaries from database
    const polygonBoundaries = await db.getPolygonBoundaries();

    // Process flight request based on polygon boundaries
    const isValid = polygonBoundaries.some(boundary => isPointWithinPolygon(flightRequest.latitude, flightRequest.longitude, boundary));

    if (isValid) {
      // Save flight request to database
      await db.saveFlightRequest(flightRequest);
      return { status: 'Approved' };
    } else {
      return { status: 'Denied' };
    }
  } catch (error) {
    console.error(error);
    return { status: 'Error' };
  }
}

// Helper function to check if a point is within a polygon
function isPointWithinPolygon(x, y, polygon) {
  var inside = false;
  var xi, yi, xj, yj;
  var i, j, nVertices = polygon.length;

  for (i = 0, j = nVertices - 1; i < nVertices; j = i++) {
    xi = polygon[i][0];
    yi = polygon[i][1];
    xj = polygon[j][0];
    yj = polygon[j][1];

    if (((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi))
      inside = !inside;
  }

  return inside;
}

module.exports = { processFlightRequest };