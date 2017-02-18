const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
  res.send('Register Route');
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  res.send('Authenticate User');
});

// Profile
router.get('/profile', (req, res, next) => {
  res.send('Profile');
});

// Validate
router.get('/validate', (req, res, next) => {
  res.send('Validate Route');
});

module.exports = router;
