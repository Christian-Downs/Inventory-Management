// calendar router

const express = require('express');
const router = express.Router();

// Import necessary functions
const { getUnavailableDays } = require('./calendarController');

// Define API routes
router.get('', getUnavailableDays);


module.exports = router;
