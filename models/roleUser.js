'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RoleUserSchema = Schema({
   description: {
      type: String,
      require: [true, 'Ingrese la descripción.']
   }
});
module.exports = mongoose.model('RoleUser', RoleUserSchema);