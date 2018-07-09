const router = require('express').Router();
const LongGoal = require('../models/').longgoal;

/**
 * GET ROUTE
 * READ -- Fetch long-term goals
 */
router.get('/', async (req, res) => {
  try {
    const longGoals = await LongGoal.findAll();
    if (longGoals.length > 0) return res.status(200).send(longGoals);
    return res.status(200).send([{ name: 'No long-term goals created yet!' }]);
  } catch (err) {
    return res.status(500).send(err);
  }
});

/**
 * POST ROUTE
 * CREATE -- Make a new long-term goal
 */
router.post('/', async (req, res) => {
  try {
    const longGoal = await LongGoal.create({
      description: req.body.description,
      user_id: req.body.user_id,
    });
    res.status(201).send(longGoal);
  } catch (err) {
    return res.status(500).send(err);
  }
});

/**
 * PUT ROUTE
 * UPDATE -- Edit existing long-term goal
 */
router.put('/', async (req, res) => {
  try {
    const longGoal = await LongGoal.findOne({ where: { id: req.body.id } });
    if (longGoal) {
      const updateLongGoal = await LongGoal.update({
        description: req.body.description,
      }, { where: { id: req.body.id } });
      if (updateLongGoal) {
        res.status(200).send(updateLongGoal);
      } else {
        res.status(500).send({ message: 'Parameters missing' });
      }
    } else {
      res.status(404).send({ message: 'Goal not found' });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

/**
 * DELETE ROUTE
 * DESTROY -- Remove long-term goal
 */
router.delete('/', async (req, res) => {
  try {
    const longGoal = await LongGoal.findOne({ where: { id: req.body.id } });
    if (longGoal) {
      longGoal.destroy({ force: true });
      return res.status(200).send({ message: 'Successfully deleted goal' });
    }
    return res.status(404).send({ message: 'Goal not found' });
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
