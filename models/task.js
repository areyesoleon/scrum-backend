'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = Schema({
   sprint: {
      type: Schema.ObjectId,
      ref: 'Sprint',
      require: [true, 'Error en la asignacion del spring.']
   },
   productBackLogHistory: {
      type: Schema.ObjectId,
      ref: 'ProductBackLogHistory',
      require: [true, 'Error en la asignacion de la historia.']
   },
   name: {
      type: String,
      require: [true, 'El nombre es obligatorio.'],
   },
   date: {
      type: Date,
      default: Date.now
   },
   origin: {
      type: Schema.ObjectId,
      ref: 'OriginTask',
      require: [true, 'El origen de la tarea no definido.'],
   },
   state: {
      type: Schema.ObjectId,
      ref: 'StateTask',
      require: [true, 'El estado de la tarea no esta definida']
   },
   originTask: {
      type: Schema.ObjectId,
      ref: 'ProductBackLogHistory'
   },
   points: {
      type: Number,
      min: [0, 'Los puntos de la tarea no pueden ser negativos'],
      max: [10, 'Los puntos maximos que puede tener la tarea son 10.'],
   },
   burnPoints: {
      type: Number,
      min: [0, 'No pudes quemar puntos en negativo.'],
      max: [10, 'Los puntos maximos que puedes quemar por tarea son 10.']
   }
});
module.exports = mongoose.model('Task', TaskSchema);