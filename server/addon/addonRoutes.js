// addon router

const express = require('express');
const router = express.Router();

// Import necessary functions
const { getAddon, getAddonById, addAddon, deleteAddon, updateAddon } = require('./addonController');

// Define API routes
router.get('', getAddon);
router.get('/:id', getAddonById);
router.post('', addAddon);
router.delete('/:id', deleteAddon);
router.put('/:id', updateAddon);

module.exports = router;