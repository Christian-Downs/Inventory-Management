// calander router

const express = require('express');
const router = express.Router();

// Import necessary functions
const { getUnavailableDays } = require('./calanderController');

// Define API routes
router.get('', getUnavailableDays);


module.exports = router;
