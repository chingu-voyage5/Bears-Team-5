const router = require('express').Router();

const auth = require('./auth');
const goals = require('./goals');

// Router Paths
router.use('/auth', auth);
router.use('/goals', goals);

module.exports = router;