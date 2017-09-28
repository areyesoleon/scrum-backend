'use strict'
const Sprint = require('../models/sprint');
const serverError = {
   type: 'error',
   message: 'Error en la consulta.'
}
function save(req, res) {
   let sprint = new Sprint();
   let params = req.body;
   sprint.name = params.name;
   sprint.save((err, ok) => {
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
               message: 'Sprint creado correctamente.',
               doc: ok
            });
         }
         else {
            res.status(400).json({
               type: 'warning',
               message: 'No se pudo crear el esprint.'
            });
         }
      }
   });

}
module.exports = {
   save
}