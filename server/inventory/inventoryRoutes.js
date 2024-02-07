// inventoryRoutes.js

const express = require('express');
const router = express.Router();

// Import necessary functions
const { getInventory, getItemById, addInventory, deleteInventory, updateInventory } = require('./inventoryController');

// Define API routes


router.get('', getInventory);
router.get('/:id', getItemById);
router.post('', addInventory);
router.delete('/:id', deleteInventory);
router.put('/:id', updateInventory);

module.exports = router;
