'use strict'

const app = require('../src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');

const port = 3000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
console.log("API is running on port " + port);