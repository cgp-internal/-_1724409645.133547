const express = require('express');
const app = express();
const { flightRequestRouter } = require('./controllers/flightRequest');
const { mapRouter } = require('./controllers/map');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/flight', flightRequestRouter);
app.use('/map', mapRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});