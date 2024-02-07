//package router

const express = require('express');
const router = express.Router();

// Import necessary functions
const { getPackage, getPackageById, addPackage, deletePackage, updatePackage } = require('./packageController');

// Define API routes
router.get('', getPackage);
router.get('/:id', getPackageById);
router.post('', addPackage);
router.delete('/:id', deletePackage);
router.put('/:id', updatePackage);

module.exports = router;
