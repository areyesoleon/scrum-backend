'use strict'
const express = require('express');
const SprintController = require('../controllers/sprint');
const api = express.Router();
api.post('/save',SprintController.save);
api.get('/search',SprintController.search);
api.get('/searchBy/:id',SprintController.searchBy);
module.exports = api;