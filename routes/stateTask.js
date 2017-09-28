'use strict'
const express = require('express');
const StateTaskController = require('../controllers/stateTask');
const api = express.Router();
api.post('/save', StateTaskController.save);
api.get('/search', StateTaskController.search);
api.get('/searchBy/:id', StateTaskController.searchBy);
api.put('/update/:id', StateTaskController.update);
api.delete('/remove/:id', StateTaskController.remove);
module.exports = api;