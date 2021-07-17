const express = require('express');

const router = express.Router();

// TODO: Get all articles in some order
router.get('/', (req, res) => {
  res.json({
    message: 'GET All'
  });
});

// TODO: Get Single article
router.get('/:id', (req, res) => {
  res.json({
    message: 'GET One'
  });
});

module.exports = router;
