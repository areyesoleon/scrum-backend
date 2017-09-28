'use strict'
const express = require('express');
const SprintController = require('../controllers/sprint');
const api = express.Router();
api.post('/save',SprintController.save);
module.exports = api;