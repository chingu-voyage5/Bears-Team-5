const router = require('express').Router();

router.get('/daily', async (req, res) => {
  let dailyGoals = ['Do something', 'Do more', 'Do final thing'];
  try {
    // TODO: Get daily list of goals from DB

    res.json({ data: dailyGoals });
  } catch (err) {
    return err;
  }
});

module.exports = router;
