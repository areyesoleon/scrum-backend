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
function search(req, res) {
   StateTask.find({}).exec((err, ok) => {
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
               message: 'Los estados fueron econtrados.',
               doc: ok
            });
         }
         else {
            res.status(400).json({
               type: 'warning',
               message: 'El estado no existe.'
            });
         }
      }
   });
}
function searchBy(req, res) {
   let id = req.params.id;
   StateTask.findById(id).exec((err, ok) => {
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
               message: 'El estado fue encotrado.',
               doc: ok
            });
         }
         else {
            res.status(400).json({
               type: 'warning',
               message: 'El estado no existe.'
            });
         }
      }
   });
}
function update(req, res) {
   let id = req.params.id;
   let dataUpdate = req.body;
   StateTask.findByIdAndUpdate(id, dataUpdate, { new: true, runValidators: true }, (err, ok) => {
      if (err) {
         let error = err.errors;
         res.status(200).json({
            type: 'error',
            arrayError: error
         });
      }
      else {
         if (ok) {
            res.status(200).json({
               type: 'success',
               message: 'El estado fue actualizado correctamente.',
               doc: ok
            });
         }
         else {
            res.status(400).json({
               type: 'warning',
               message: 'No se pudo actualizar el estado.'
            });
         }
      }
   });
}
function remove(req, res) {
   let id = req.params.id;
   StateTask.findByIdAndRemove(id).exec((err, ok) => {
      if (err) {
         res.status(500).json({
            serverError
         });
      }
      else {
         if (ok) {
            res.status(200).json({
               type: 'success',
               message: 'El estado fue eliminado correctamente.'
            });
         }
         else {
            res.status(400).json({
               type: 'warning',
               message: 'No se pudo eliminar el estado.'
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