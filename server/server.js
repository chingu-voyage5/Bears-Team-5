require('dotenv').config();
const express = require('express');
const middleware = require('./config/middleware');
const api = require('./api');

const app = express();

app.use(middleware);
app.use('/api', api);

module.exports = app;
