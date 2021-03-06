'use strict'
const express = require('express');
const SprintController = require('../controllers/sprint');
const api = express.Router();
api.post('/save', SprintController.save);
api.get('/search', SprintController.search);
api.get('/searchBy/:id', SprintController.searchBy);
api.put('/update/:id', SprintController.update);
api.delete('/remove/:id', SprintController.remove);
module.exports = api;