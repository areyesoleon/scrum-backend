'use strict'
const express = require('express');
const ProductBackLogHistoryController = require('../controllers/productBackLogHistory');

const api = express.Router();
api.post('/save', ProductBackLogHistoryController.save);
module.exports = api;