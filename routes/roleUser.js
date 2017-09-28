'use strict'
const express = require('express');
const RoleUserController = require('../controllers/roleUser');
const api = express.Router();
api.post('/save', RoleUserController.save);
api.get('/search', RoleUserController.search);
api.get('/search/:id', RoleUserController.searchBy);
api.put('/update/:id', RoleUserController.update);
module.exports = api;