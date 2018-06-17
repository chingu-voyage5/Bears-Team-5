// const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const { authCallback } = require('./callback');

const GoogleAuth = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  authCallback,
);

module.exports = GoogleAuth;