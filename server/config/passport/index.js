const passport = require('passport');

const GoogleAuth = require('./google');
const { localSignup, localLogin } = require('./local');
const {
  serializeUser,
  deserializeUser,
} = require('./serializers');

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

passport.use('local-signup', localSignup);
passport.use('local-login', localLogin);
passport.use('google', GoogleAuth);

module.exports = passport;