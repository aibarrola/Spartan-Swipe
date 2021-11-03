const { application } = require('express');
const express = require('express');
const router = express.Router();

// @route   GET api/cards
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Cards route'));

module.exports = router;