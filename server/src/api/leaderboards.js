const express = require('express');
const {authenticateToken} = require('../middlewares');

// Connect MongoDB
const db = require('monk')(process.env.MONGO_URI)

// Get Collection
const users = db.get('users')

const router = express.Router();

// Show the leaderboard for all users
router.get('/', authenticateToken, async (req, res, next) => {
  try {
    const user = await users.find({}, {fields: { in_progress: 0, completed: 0 }, sort: {points: -1}} )
    res.json(user)
  } catch (error) {
    next(error)
  }
});

module.exports = router;
