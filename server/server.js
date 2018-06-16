const path = require('path');
require('dotenv').config({
  path: path.resolve( process.cwd(), '..', '.env'),
});
const express = require('express');
const middleware = require('./middleware');

const app = express();

app.use(middleware);

// Test Route (to be deleted)
app.get('/', (req, res) => res.send('Hello world!'));

module.exports = app;
