Web Server Application README
===========================

Description
-----------

This is a web server application built with Express.js, utilizing Leaflet.js for interactive mapping. The application allows users to customize and retrieve map data, and process flight requests based on polygon boundaries.

How to Run
-----------

1. Install dependencies: `npm install`
2. Start the server: `node app.js`
3. Open a web browser and navigate to `http://localhost:3000`

Features
--------

* Customize and retrieve map data
* Process flight requests based on polygon boundaries
* Interactive mapping with Leaflet.js

Technologies Used
-----------------

* Express.js
* Leaflet.js
* SQLite

Application Structure
--------------------

* `app.js`: Main entry point for the web server application
* `controllers/`: Directory for controller files
* `controllers/flightRequest.js`: Handles requests for processing flight requests based on polygon boundaries
* `controllers/map.js`: Handles requests for customizing and retrieving map data
* `services/`: Directory for service files
* `services/flightService.js`: Contains functions for processing flight requests based on polygon boundaries
* `services/mapService.js`: Contains functions for customizing and retrieving map data
* `models/`: Directory for model files
* `models/mapData.js`: Schema for storing map data, including polygon boundaries and flight request information
* `routes.js`: Defines API routes for the application
* `public/`: Directory for public files
* `public/index.html`: Main HTML file for the application
* `public/css/style.css`: Styling for the application
* `public/js/mapScript.js`: JavaScript code for handling map interactions and sending requests to the backend API
* `package.json`: Package management file for the project
* `README.md`: This README file
* `.gitignore`: .gitignore with node-modules and cache files
* `db.js`: Database setup using SQLite