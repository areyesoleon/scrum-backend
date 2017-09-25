'use strict'
const express = require('express');
const ProjectController = require('../controller/project');
const api = express.Router();

api.post('/save',ProjectController.save);

module.exports = api;