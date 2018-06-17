const router = require('express').Router();

const goals = require('./goals');

// Router Paths
router.use('/goals', goals);

module.exports = router;