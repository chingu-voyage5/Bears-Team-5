const session = require('express-session');
require('dotenv').config();

module.exports = session({
  resave: true,
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }, // cookie age of 1 day
});
