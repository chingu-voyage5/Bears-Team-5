const router = require('express').Router();
const passport = require('passport');
const { checkLogin } = require('../config/passport/helper');

/**
 * GET AUTHENTICATED USER DATA
 */
router.get('/user', (req, res) => {
  if (req.user) res.status(200).json({ user: req.user });
  else res.status(200).json({ user: null });
});

/*
 * POST ROUTE
 * CREATE -- Make new user
 * Utilize passport.authenticate middleware
 */
router.post('/signup', (req, res, next) => {
  passport.authenticate('local-signup', (err, user, info) => {
    if (err) return res.status(500).send(err);
    if (user) return res.status(200).send(user);
    if (info) return res.status(401).send(info.message);
  })(req, res, next);
});

/*
 * POST ROUTE
 * READ -- Login user
 * Utilize passport.authenticate middleware
 */
router.post('/login', (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    if (err) return res.status(500).json(err);
    if (info) return res.status(401).json(info.message);

    req.login(user, (error) => {
      if (error) return res.json(error);
      if (user) return res.status(200).json(user);
    });
  })(req, res, next);
});

/**
 * GET ROUTE
 * READ -- Logout user
 * Utilize `helper.js` middleware to check if user is logged in first
 */
router.get('/logout', checkLogin, (req, res) => {
  req.logout();
  res.status(200).send({ message: 'Successfully logged out user!' });
});

// / //////////////////////////////////////////////
// TODO: TEST GOOGLE AUTHENTICATION ROUTES //////
// / //////////////////////////////////////////////

/*
 * GET ROUTE
 * READ -- Login user via Google authentication
 */
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

/*
 * GET ROUTE
 * READ -- Callback Google authentication
 */
router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', (err, user) => {
    if (err) return res.status(500).send(err);
    if (user) return res.status(200).send(user);
  })(req, res, next);
});

module.exports = router;
