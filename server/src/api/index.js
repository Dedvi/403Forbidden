const express = require('express');

const users = require('./users');
const articles = require('./articles');
const leaderboards = require('./leaderboards');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Artilingo API - 👋🌎'
  });
});

router.use('/user', users);
router.use('/articles', articles);
router.use('/leaderboards', leaderboards);

module.exports = router;
