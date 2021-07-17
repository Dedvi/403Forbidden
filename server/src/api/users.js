const express = require('express');

const router = express.Router();

// Get One User by Id
router.get('/:id', (req, res) => {
  res.json({
    message: 'GET ONE'
  });
});

// Login a user with credentials and pass token
router.post('/:id', (req, res) => {
 res.json({
    message: 'Sign In User'
  });
});

module.exports = router;