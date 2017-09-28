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
function search(req, res) {
   RoleUser.find({}).exec((err, ok) => {
      if (err) {
         res.status(500).json({
            serverError
         });
      }
      else {
         if (ok) {
            res.status(200).json({
               type: 'success',
               message: 'Los roles fueron encontrados.',
               doc: ok
            });
         }
         else {
            res.status(404).json({
               type: 'warning',
               message: 'El rol que buscas no existe.'
            });
         }
      }
   });
}
function searchBy(req, res) {
   let id = req.params.id;
   RoleUser.findById(id).exec((err, ok) => {
      if (err) {
         res.status(500).json({
            serverError
         });
      }
      else {
         if (ok) {
            res.status(200).json({
               type: 'success',
               message: 'El rol fue encontrado.',
               doc: ok
            });
         }
         else {
            res.status(404).json({
               type: 'warning',
               message: 'El rol que buscas no existe.'
            });
         }
      }
   });
}
function update(req, res) {
   let id = req.params.id;
   let dataUpdate = req.body;
   RoleUser.findByIdAndUpdate(id, dataUpdate, { new: true, runValidators: true }, (err, ok) => {
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
               message: 'El rol fue acutalizado correctamente.',
               doc: ok
            });
         }
         else {
            res.status(400).json({
               type: 'warning',
               message: 'No se pudo actualizar el rol.'
            });
         }
      }
   });
}
module.exports = {
   save,
   search,
   searchBy,
   update
}