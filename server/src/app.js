'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const indexRoute = require('./routes/index');
const productsRoute = require('./routes/products');
const accountRoute = require('./routes/accounts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/products', productsRoute);
app.use('/accounts', accountRoute);

module.exports = app;