// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');

const PROJECT_NAME = 'bikestore';

const bodyParser = require('body-parser');
//const proxy = require('express-http-proxy');
const cors = require('cors');
const fs = require('fs');
const app = express();


// Parsers for POST data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, `./${PROJECT_NAME}`)));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, `./${PROJECT_NAME}/index.html`));
});

/**
 * Get port from environment and store in Express.
 */
 const port = '9000';
app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Run Server https://localhost:${port}`));