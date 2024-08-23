const db = require('./db');

let mapData = [];

const getMapData = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM map_data', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const setMapData = (data) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO map_data SET ?', data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = { getMapData, setMapData };