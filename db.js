const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

const createMapDataTable = `CREATE TABLE IF NOT EXISTS map_data (
  id INTEGER PRIMARY KEY,
  polygon_boundaries TEXT,
  flight_request_info TEXT
);`;

db.run(createMapDataTable, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Map data table created.');
  }
});

module.exports = db;