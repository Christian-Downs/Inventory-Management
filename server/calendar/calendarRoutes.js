// calendar router

const express = require('express');
const router = express.Router();

// Import necessary functions
const { getUnavailableDays, getUnavailableDaysForPackage } = require('./calendarController');

// Define API routes
router.get('', getUnavailableDays);
router.get('/:id', getUnavailableDaysForPackage )

module.exports = router;
