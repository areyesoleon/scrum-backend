'use strict'
const express = require('express');
const ProjectController = require('../controllers/project');
const api = express.Router();

api.post('/save', ProjectController.save);
api.get('/search', ProjectController.search);
api.get('/searchBy/:id', ProjectController.searchBy);
api.put('/update/:id', ProjectController.update);
api.delete('/remove/:id', ProjectController.remove);

module.exports = api;