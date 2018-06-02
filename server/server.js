require('dotenv').config();
const express = require('express');
const middleware = require('./middleware');

const app = express();

app.use(middleware);

// Test Route (to be deleted)
app.get('/', (req, res) => res.send('Hello world!'));

module.exports = app;
