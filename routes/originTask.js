'use strict'
const express = require('express');
const OriginTaskController = require('../controllers/originTask');
const api = express.Router();
api.post('/save',OriginTaskController.save);
module.exports = api;
