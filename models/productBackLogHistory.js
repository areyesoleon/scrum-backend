'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductBackLogHistorySchema = Schema({
   productBackLog:{
      type:Schema.ObjectId,
      ref:'ProductBackLog',
      require:[true,'Error en la asignación de la historia.']
   },
   name:{
      type: String,
      require:[true,'Ingrese el nombre de la historia.']
   },
   description: {
      type:String,
      require:[true,'Ingrese la descripción.']
   },
   priority:{
      type: Number,
      require: [true,'Ingrese el nivel de prioridad']
   }
});
module.exports = mongoose.model('ProductBackLogHistory',ProductBackLogHistorySchema);
