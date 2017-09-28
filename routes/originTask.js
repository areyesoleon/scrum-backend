'use strict'
const express = require('express');
const OriginTaskController = require('../controllers/originTask');
const api = express.Router();
api.post('/save', OriginTaskController.save);
api.get('/search', OriginTaskController.search);
api.get('/searchBy/:id', OriginTaskController.searchBy);
api.put('/update/:id', OriginTaskController.update);
api.delete('/remove/:id', OriginTaskController.remove);
module.exports = api;
