// const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { localSignupCallback, localLoginCallback } = require('./callback');

/**
 * Passport Local Signup Strategy
 * @param {string} username
 * @param {string} password
 * @callback done
 */
const localSignup = new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : false,
}, (email, password, done) => {
  localSignupCallback(email, password, done);
});

/**
 * Passport Local Login Strategy
 * @param {string} username
 * @param {string} password
 * @callback done
 */
const localLogin = new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : false,
}, (email, password, done) => {
  localLoginCallback(email, password, done);
});

module.exports = { localSignup, localLogin };