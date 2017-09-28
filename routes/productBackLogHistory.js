'use strict'
const express = require('express');
const ProductBackLogHistoryController = require('../controllers/productBackLogHistory');

const api = express.Router();
api.post('/save', ProductBackLogHistoryController.save);
api.get('/search/:productBackLog', ProductBackLogHistoryController.search);
api.get('/searchBy/:id', ProductBackLogHistoryController.searchBy);
api.put('/update/:id', ProductBackLogHistoryController.update);
api.delete('/remove/:id', ProductBackLogHistoryController.remove);
module.exports = api;