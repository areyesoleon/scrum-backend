'use strict'
const StateTask = require('../models/stateTask');
const serverError = {
   type: 'error',
   message: 'Error en la consulta.'
}
function save(req, res) {
   let stateTask = new StateTask();
   let data = req.body;
   stateTask.description = data.description;
   stateTask.save((err, ok) => {
      if (err) {
         let error = err.errors;
         res.status(500).json({
            type: 'error',
            arrayError: error
         });
      }
      else {
         if (ok) {
            res.status(200).json({
               type: 'success',
               message: 'El estado fue guardado correctamente.',
               doc: ok
            });
         }
         else {
            res.status(400).json({
               type: 'warning',
               message: 'No se pudo crear el estado.'
            });
         }
      }
   });
}
module.exports = {
   save
}