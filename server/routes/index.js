const router = require('express').Router();

const auth = require('auth');

// Router Paths
router.use('/', auth);

module.exports = router;