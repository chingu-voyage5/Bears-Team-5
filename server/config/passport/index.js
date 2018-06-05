const passport = require('passport');

const GoogleAuth = require('./google');
const { localSignup, localLogin } = require('./local');
const {
  serializeUser,
  deserializeUser,
} = require('./serializers');

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

passport.use(localSignup);
passport.use(localLogin);
passport.use(GoogleAuth);

module.exports = passport;