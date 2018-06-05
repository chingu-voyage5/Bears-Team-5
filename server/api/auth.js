const router = require('express').Router();
const passport = require('passport');

/*
 * POST ROUTE
 * CREATE -- Make new user
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
 */
router.post('/login', passport.authenticate('local', { 
  successRedirect: '/',
  failureRedirect: '/login' 
}));

module.exports = router;