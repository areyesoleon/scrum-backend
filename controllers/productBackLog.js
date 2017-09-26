'use strict'
const ProductBackLog = require('../models/productBackLog');
const serverError = {
   type: 'error',
   message: 'Error en la consulta.'
}
function save(req, res) {
   let productBackLog = new ProductBackLog();
   let params = req.body;
   productBackLog.name = params.name;
   productBackLog.project = params.project;
   productBackLog.save((err, ok) => {
      if (err) {
         let error = err.errors;
         res.status(500).send({
            type: 'error',
            arrayError: error
         });
      }
      else {
         if (ok) {
            res.status(200).send({
               type: 'success',
               message: 'La historia fue creada',
               doc: ok
            });
         }
         else {
            res.status(404).send({
               type: 'warning',
               message: 'Los datos no fueron guardados.'
            });
         }
      }
   });
}
module.exports = {
   save
}