'use strict'
const express = require('express');
const UserController =  require('../controllers/user');
const api = express.Router();
api.post('/save',UserController.save);
module.exports = api;