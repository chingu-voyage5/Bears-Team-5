const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { localSignupCallback, localLoginCallback } = require('./callback');

/**
 * Passport Local Signup Strategy
 * @param {string} username
 * @param {string} password
 * @callback done
 */
passport.use('local-signup', new LocalStrategy((username, password, done) => {
  localSignupCallback
}));

/**
 * Passport Local Login Strategy
 * @param {string} username
 * @param {string} password
 * @callback done
 */
passport.use('local-login', new LocalStrategy((username, password, done) => {
  localLoginCallback
}));

module.exports = passport;