const passport = require('passport');

const GoogleStrategy = require('./google');
const LocalStrategy = require('./local');
const {
  serializeUser,
  deserializeUser,
} = require('./serializers');

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

passport.use(LocalStrategy);
passport.use(GoogleStrategy);

module.exports = passport;