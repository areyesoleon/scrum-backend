'use strict'
const express = require('express');
const ProductBackLogController = require('../controllers/productBackLog');
const api = express.Router();

api.post('/save',ProductBackLogController.save);

module.exports = api;