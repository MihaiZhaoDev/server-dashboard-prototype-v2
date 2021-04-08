/**
 * Module dependencies.
 */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

/**
 * Define routers
 */
const apiRouter = require('./routes/index');

/**
 * Create app
 */
const app = express();

/**
 * Setting up the app
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

/**
 * Use routers
 */
app.use('/api', apiRouter);

/**
 * Export app settings
 */
module.exports = app;
