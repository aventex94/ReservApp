'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const userRoutes = require('../routes/userRoutes')

// Set up the express app
const app = express();


app.use(logger('dev'));
app.use(userRoutes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
module.exports = app;