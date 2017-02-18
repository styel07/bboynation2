const express = require('express');
const router = express.Router();

// GET Methods
// Get All Events
router.get('/', (req, res, next) => {
  res.send('get all events');
});

// Get Single Event
router.get('/event/', (req, res, next) => {
  if(req.params.id) {
    console.log('single event');
  }
  res.send('get single event');
});

// POST
// Register Event
router.post('/event/event-registration', (req, res, next) => {
  res.send('register your event');
});

module.exports = router;
