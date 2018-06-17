const User = require('../../models').user;

/**
 * Serializes user ID to be stored in coookie
 * @param {string} user: User instance
 * @callback Passport callback: serialized user ID
 */
const serializeUser = (user, done) => {
  done(null, user.id)
};

/**
 * Deserializes user ID to find authenticated user
 * @param {string} userID: deserialized from the cookie
 * @callback Passport callback: found user
 */
const deserializeUser = async (userID, done) => {
  const user = await User.findById(userID);
  if (user) return done(null, user);
  return done('Authentication failed. User not found', null);
};

module.exports = {
  serializeUser,
  deserializeUser,
};