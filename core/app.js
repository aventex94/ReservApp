'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('../routes/userRoutes')

// Set up the express app
const app = express();
var corsOptions={
    "origin" : 'http://localhost:8100',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "optionsSuccessStatus": "200" ,
}
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes)

module.exports = app;