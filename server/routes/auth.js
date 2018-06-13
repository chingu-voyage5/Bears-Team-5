const router = require('express').Router();
const passport = require('passport');

router.post('/login', passport.authenticate('local', { 
  successRedirect: '/',
  failureRedirect: '/login' 
}));

