'use strict'
const express = require('express');
const StateTaskController = require('../controllers/stateTask');
const api = express.Router();
api.post('/save', StateTaskController.save);
module.exports = api;