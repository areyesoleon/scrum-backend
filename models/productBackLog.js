'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductBackLogSchema = Schema({
   name: {
      type: String,
      required: [true, 'Ingresa el nombre de la historia.']
   },
   date: {
      type: Date,
      default: Date.now
   },
   project: {
      type: Schema.ObjectId,
      ref: 'Project',
      required: [true, 'Error en la asignación del proyecto.']
   }
});

module.exports = mongoose.model('ProductBackLog', ProductBackLogSchema);