const express = require('express');

const router = express.Router();

// Show the leaderboard for all users
router.get('/', (req, res) => {
  res.json({
    message: 'GET All Points'
  });
});

// Increase Users points with user id passed in.
router.post('/:id', (req, res) => {
  res.json({
    message: 'increase Points'
  });
});

module.exports = router;
