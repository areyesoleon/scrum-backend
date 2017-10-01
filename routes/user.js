'use strict'
const express = require('express');
const UserController = require('../controllers/user');
const api = express.Router();
api.post('/save', UserController.save);
api.get('/search', UserController.search);
api.get('/searchBy/:id', UserController.searchBy);
api.put('/update/:id', UserController.update);
api.delete('/remove/:id', UserController.remove);

module.exports = api;