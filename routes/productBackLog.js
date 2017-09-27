'use strict'
const express = require('express');
const ProductBackLogController = require('../controllers/productBackLog');
const api = express.Router();

api.post('/save', ProductBackLogController.save);
api.get('/search/:project', ProductBackLogController.search);
api.get('/searchBy/:id', ProductBackLogController.searchBy);

module.exports = api;