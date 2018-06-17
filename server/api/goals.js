const router = require('express').Router();
const ShortGoal = require('../models/').shortgoal

/**
 * GET ROUTE 
 * READ -- Fetch daily goals
 */
router.get('/daily', async (req, res) => {
  try {
    const dailyGoals = await ShortGoal.findAll();
    if (dailyGoals.length > 0) return res.status(200).send(dailyGoals);
    return res.status(200).send([{ name: 'No goals created yet!' }]);
  } catch (err) {
    return res.status(500).send(err);
  }
});

/**
 * POST ROUTE
 * CREATE -- Make a new daily goal
 */
router.post('/daily', async (req, res) => {
  try {
    const dailyGoal = await ShortGoal.create({
      id: req.body.id,
      description: req.body.description,
      longgoal_id: req.body.longgoal_id,
    });
    res.status(201).send(dailyGoal);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
