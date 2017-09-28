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
function search(req, res) {
   let id = req.params.id;
   Sprint.find({}).exec((err, ok) => {
      if (err) {
         res.status(500).json({
            serverError
         });
      }
      else {
         if (ok) {
            res.status(200).json({
               type: 'success',
               doc: ok
            });
         }
         else {
            res.status(404).json({
               type: 'warning',
               message: 'No se encontro ningun sprint.'
            });
         }
      }
   });
}
function searchBy(req, res) {
   let id = req.params.id;
   Sprint.findById(id).exec((err, ok) => {
      if (err) {
         res.status(500).json({
            serverError
         });
      }
      else {
         if (ok) {
            res.status(200).json({
               type: 'success',
               doc: ok
            });
         }
         else {
            res.status(404).json({
               type: 'warning',
               message: 'El sprint que busca no existe.'
            });
         }
      }
   });
}
function update(req, res) {
   let id = req.params.id;
   let dataUpdate = req.body;
   Sprint.findByIdAndUpdate(id, dataUpdate, { new: true, runValidators: true }, (err, ok) => {
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
               message: 'El sprint fue actualizado correctamente.',
               doc: ok
            });
         }
         else {
            res.status(400).json({
               type: 'warning',
               message: 'El sprint no pudo ser actualizado.'
            });
         }
      }
   });
}
function remove(req, res) {
   let id = req.params.id;
   Sprint.findByIdAndRemove(id).exec((err, ok) => {
      if (err) {
         res.status(500).json({
            serverError
         });
      }
      else {
         if (ok) {
            res.status(200).json({
               type: 'success',
               message: 'El sprint fue eliminado correctamente.'
            });
         }
         else {
            res.status(400).json({
               type: 'error',
               message: 'El sprint no pudo ser eliminado.'
            });
         }
      }
   });
}
module.exports = {
   save,
   search,
   searchBy,
   update,
   remove
}