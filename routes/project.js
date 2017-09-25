'use strict'
const express = require('express');
const ProjectController = require('../controllers/project');
const api = express.Router();

api.post('/save',ProjectController.save);
api.get('/search',ProjectController.search);

module.exports = api;