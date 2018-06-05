const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { localSignupCallback, localLoginCallback } = require('./callback');

/**
 * Passport Local Signup Strategy
 * @param {string} username
 * @param {string} password
 * @callback done
 */
const localSignup = new LocalStrategy((email, password, done) => {
  localSignupCallback
});

/**
 * Passport Local Login Strategy
 * @param {string} username
 * @param {string} password
 * @callback done
 */
const localLogin = new LocalStrategy((email, password, done) => {
  localLoginCallback
});

module.exports = { localSignup, localLogin };