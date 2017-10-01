'use strict'
const express = require('express');
const UserController =  require('../controllers/user');
const api = express.Router();
api.post('/save',UserController.save);
api.get('/search',UserController.search);
api.get('/searchBy/:id',UserController.searchBy);
module.exports = api;