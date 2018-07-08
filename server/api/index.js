const router = require('express').Router();

const auth = require('./auth');
const dailyGoals = require('./dailyGoals');
const longTermGoals = require('./longTermGoals');

// Router Paths
router.use('/auth', auth);
router.use('/goals/daily', dailyGoals);
router.use('/goals/longterm', longTermGoals);

module.exports = router;