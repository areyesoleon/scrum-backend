'use strict'
const RoleUser = require('../models/roleUser');
const serverError = {
   type: 'error',
   message: 'Error en la consulta.'
}
function save(req, res) {
   let roleUser = new RoleUser();
   let data = req.body;
   roleUser.description = data.description;
   roleUser.save((err, ok) => {
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
               message: 'El rol fue creado correctamente',
               doc: ok
            })
         }
         else {
            res.status(400).json({
               type: 'warning',
               message: 'No se pudo crear el rol.'
            });
         }
      }
   });
}
module.exports = {
   save
}