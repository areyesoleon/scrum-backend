'use strict'
const ProductBackLogHistory = require('../models/productBackLogHistory');
const serverError = {
   type: 'error',
   message: 'Error en la consulta.'
}
function save(req, res) {
   let productBackLogHistory = new ProductBackLogHistory();
   let params = req.body;
   productBackLogHistory.name = params.name;
   productBackLogHistory.description = params.description;
   productBackLogHistory.productBackLog = params.productBackLog;
   productBackLogHistory.priority = params.priority;
   productBackLogHistory.save((err, ok) => {
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
               message: 'La historia fue creada ',
               doc:ok
            });
         }
         else {
            res.status(400).json({
               type: 'warning',
               message: 'Los datos no fueron guardados'
            });
         }
      }
   });
}
module.exports = {
   save
}