'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SprintSchema = Schema({
   name: {
      type: String,
      required: [true, 'Ingrese el nombre del sprint.']
   },
   date: {
      type: Date,
      default: Date.now
   }
});
module.exports = mongoose.model('Sprint', SprintSchema);