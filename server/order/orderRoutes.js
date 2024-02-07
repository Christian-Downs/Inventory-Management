// order routes

const express = require('express');
const router = express.Router();

// Import necessary functions
const { getOrder, getOrderById, addOrder, deleteOrder, updateOrder } = require('./orderController');

// Define API routes
router.get('', getOrder);
router.get('/:id', getOrderById);
router.post('', addOrder);
router.delete('/:id', deleteOrder);
router.put('/:id', updateOrder);

module.exports = router;