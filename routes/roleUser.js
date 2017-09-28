'use strict'
const express = require('express');
const RoleUserController = require('../controllers/roleUser');
const api = express.Router();
api.post('/save', RoleUserController.save)
module.exports = api;