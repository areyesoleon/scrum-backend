'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjectSchema = Schema({
   name: {
      type: String,
      required: [true, 'Ingrese el nombre del proyecto.']
   },
   date: {
      type: Date, default: Date.now
   }
});

module.exports = mongoose.model('Project', ProjectSchema);