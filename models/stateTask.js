'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StateTaskSchema = Schema({
   description: {
      type: String,
      required: [true, 'Ingrese la descripción.']
   }
});
module.exports = mongoose.model('StateTask', StateTaskSchema);