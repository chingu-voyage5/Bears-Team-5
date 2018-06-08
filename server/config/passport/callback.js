const User = require('../../models/user');
const { comparePass, hashPass } = require('./helper');

/**
 * Callback function for passport local signup
 * Find or create an authenticated user
 * @param {string} email: user email
 * @param {password} password: user password
 * @callback done Passport callback: authenticated user
 */
const localSignupCallback = async (email, password, done) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (user) { return done(null, false); }
    else {
      const newUser = await User.create({ email, password: hashPass(password) });
      return done(null, user);  
    }
  } catch (err) { return done(err); }
}

/**
 * Callback function for passport local login
 * @param {string} email: user email
 * @param {string} password: user password
 * @callback done Passport callback: authenticated user
 */
const localLoginCallback = async (email, password, done) => {
  console.log('THE USER: ', db.user, User);
  try {
    let user = await User.findOne({ where: { email } });
    if (!user) { return done(null, false, { message: 'Email not found.' }) }
    if (!comparePass(password, user.password)) { return done(null, false, { message: 'Incorrect password.' }) }
    return done(null, user);
  } catch (err) { return done(err); }
}

/**
 * Callback function for Google oauth passport
 * Finds or creates an authenticated user
 * @param {string} accessToken ignored
 * @param {string} refreshToken ignored
 * @param {Object} Google data destructured email
 * @callback done Passport callback: authenticated user
 */
const authCallback = async (
  accessToken,
  refreshToken,
  { id, displayName, emails },
  done,
) => {
  try {
    const user = (
      await User.findOne({ where: { googleID: id } }) ||
      await User.create({ googleID: id, name: displayName, email: emails[0].value })
    );
    return done(null, user);
  } catch (error) { return done(error, null); }
};

module.exports = {
  localSignupCallback,
  localLoginCallback,
  authCallback
};