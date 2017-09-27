'use strict'
const express = require('express');
const ProductBackLogController = require('../controllers/productBackLog');
const api = express.Router();

api.post('/save', ProductBackLogController.save);
api.get('/search/:project', ProductBackLogController.search);
api.get('/searchBy/:id', ProductBackLogController.searchBy);
api.put('/update/:id', ProductBackLogController.update);
api.delete('/remove/:id', ProductBackLogController.remove);

module.exports = api;