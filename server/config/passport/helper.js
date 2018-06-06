const bcrypt = require('bcrypt');

const comparePass = (userPassword, databasePassword) => {
  return bcrypt.compareSync(userPassword, databasePassword);
}

const hashPass = (userPassword) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(userPassword, salt);
  return hash;
}

const checkLogin = (req, res, next) => {
  if (!req.user) return res.status(401).json({ status: 'Must be logged in first.' });
  return next();
}

module.exports = {
  comparePass,
  hashPass,
  checkLogin
};