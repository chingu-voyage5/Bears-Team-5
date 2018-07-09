const router = require('express').Router();
const ShortGoal = require('../models/').shortgoal;

/**
 * GET ROUTE
 * READ -- Fetch daily goals
 */
router.get('/', async (req, res) => {
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
router.post('/', async (req, res) => {
  try {
    const dailyGoal = await ShortGoal.create({
      description: req.body.description,
      longgoal_id: req.body.longgoal_id,
    });
    res.status(201).send(dailyGoal);
  } catch (err) {
    return res.status(500).send(err);
  }
});

/**
 * PUT ROUTE
 * UPDATE -- Edit existing daily goal
 */
router.put('/', async (req, res) => {
  try {
    const dailyGoal = await ShortGoal.findOne({ where: { id: req.body.id } });
    if (dailyGoal) {
      const updateDailyGoal = await ShortGoal.update({
        description: req.body.description,
        longgoal_id: req.body.longgoal_id,
      }, { where: { id: req.body.id } });
      if (updateDailyGoal) {
        return res.status(200).send(updateDailyGoal);
      }
      res.status(500).send({ message: 'Parameters missing' });
    } else {
      res.status(404).send({ message: 'Goal not found' });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

/**
 * DELETE ROUTE
 * DESTROY -- Remove daily goal
 */
router.delete('/', async (req, res) => {
  try {
    const dailyGoal = await ShortGoal.findOne({ where: { id: req.body.id } });
    if (dailyGoal) {
      dailyGoal.destroy({ force: true });
      return res.status(200).send({ message: 'Successfully deleted goal' });
    }
    return res.status(404).send({ message: 'Goal not found' });
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
