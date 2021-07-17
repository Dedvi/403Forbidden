const express = require('express');

const users = require('./users');
const articles = require('./articles');
const leaderboards = require('./leaderboards');
const translate = require('./translate');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: "Artilingo's highly sophisticated API 😂, 👋🌎"
  });
});

router.use('/user', users);
router.use('/articles', articles);
router.use('/leaderboards', leaderboards);
router.use('/translate', translate);

module.exports = router;
