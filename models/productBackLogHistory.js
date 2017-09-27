'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductBackLogHistorySchema = Schema({
   productBackLog: {
      type: Schema.ObjectId,
      ref: 'ProductBackLog',
      required: [true, 'Error en la asignación de la historia.']
   },
   name: {
      type: String,
      required: [true, 'Ingrese el nombre de la historia.']
   },
   description: {
      type: String,
      required: [true, 'Ingrese la descripción.']
   },
   priority: {
      type: Number,
      min: [0, 'La prioridad no pude ser negativa.'],
      max: [10, 'La prioridad no pude ser mayor a 10.'],
      required: [true, 'Ingrese el nivel de prioridad.']
   }
});
module.exports = mongoose.model('ProductBackLogHistory', ProductBackLogHistorySchema);
