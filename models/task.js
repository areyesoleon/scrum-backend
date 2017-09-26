'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = Schema({
   sprint: {
      type: Schema.ObjectId,
      ref: 'Sprint',
      required: [true, 'Error en la asignacion del spring.']
   },
   productBackLogHistory: {
      type: Schema.ObjectId,
      ref: 'ProductBackLogHistory',
      required: [true, 'Error en la asignacion de la historia.']
   },
   name: {
      type: String,
      required: [true, 'El nombre es obligatorio.'],
   },
   date: {
      type: Date,
      default: Date.now
   },
   origin: {
      type: Schema.ObjectId,
      ref: 'OriginTask',
      required: [true, 'El origen de la tarea no definido.'],
   },
   state: {
      type: Schema.ObjectId,
      ref: 'StateTask',
      required: [true, 'El estado de la tarea no esta definida']
   },
   originTask: {
      type: Schema.ObjectId,
      ref: 'ProductBackLogHistory'
   },
   points: {
      type: Number,
      min: [0, 'Los puntos de la tarea no pueden ser negativos'],
      max: [10, 'Los puntos maximos que puede tener la tarea son 10.'],
      required: [true,'Ingrese los puntos de la tarea.']
   },
   burnPoints: {
      type: Number,
      min: [0, 'No pudes quemar puntos en negativo.'],
      max: [10, 'Los puntos maximos que puedes quemar por tarea son 10.'],
      required: [true,'Ingrese 0 si no hay puntos quemados.']
   }
});
module.exports = mongoose.model('Task', TaskSchema);