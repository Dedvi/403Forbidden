const express = require('express');
const {authenticateToken} = require('../middlewares');

// Connect MongoDB
const db = require('monk')(process.env.MONGO_URI)

// Get Collection
const users = db.get('users')

const router = express.Router();

// TODO: Show the leaderboard for all users
router.get('/', authenticateToken, async (req, res, next) => {
  try {
    const user = await users.find({}, ['name', 'email'] )
    res.json(user)
  } catch (error) {
    next(error)
  }
});

// TODO: Increase Users points with user id passed in.
router.post('/:id', (req, res) => {
  res.json({
    message: 'increase Points'
  });
});

module.exports = router;
