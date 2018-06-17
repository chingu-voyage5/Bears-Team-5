const path = require('path');
require('dotenv').config({
  path: path.resolve( process.cwd(), '..', '.env'),
});
const express = require('express');
const middleware = require('./middleware');
const api = require('./api');

const app = express();

app.use(middleware);

app.use('/api', api);

module.exports = app;
