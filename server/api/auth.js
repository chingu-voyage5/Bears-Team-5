const router = require('express').Router();
const passport = require('passport');
const { checkLogin } = require('../config/passport/helper');

/*
 * POST ROUTE
 * CREATE -- Make new user
 * Utilize passport.authenticate middleware
 *  * TODO: Add flash/toast message for successful signup
 */
router.post('/signup', passport.authenticate('local-signup', {
  failureRedirect : '/signup', 
}), (req, res) => {
  console.log('successfully signed up: ', req.user);
  res.send(req.user);
});

/*
 * POST ROUTE
 * READ -- Login user
 * Utilize passport.authenticate middleware
 *  * TODO: Add flash/toast message for successful login
 */
router.post('/login', passport.authenticate('local-login', { 
  successRedirect: '/',
  failureRedirect: '/login' 
}));

/**
 * GET ROUTE
 * READ -- Logout user
 * Utilize `helper.js` middleware to check if user is logged in first
 * TODO: Add flash/toast message for successful logout
 */
router.get('/logout', checkLogin, (req, res) => {
  req.logout();
  res.redirect('/');
})

module.exports = router;