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
               doc: ok
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
function search(req, res) {
   let productBackLog = req.params.productBackLog;
   ProductBackLogHistory.find({ productBackLog: productBackLog }).exec((err, ok) => {
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
               message: 'La historia que busca no existe.'
            });
         }
      }
   });
}
function searchBy(req, res) {
   let id = req.params.id;
   ProductBackLogHistory.findById(id).populate('productBackLog').exec((err, ok) => {
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
               message: 'La historia que buscas no existe.'
            });
         }
      }
   });
}
function update(req, res) {
   let id = req.params.id;
   let dataUpdate = req.body;
   ProductBackLogHistory.findByIdAndUpdate(id, dataUpdate, { new: true, runValidators: true }, (err, ok) => {
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
               doc: ok
            });
         }
         else {
            res.status(400).json({
               type: 'warning',
               message: 'La historia no se pudo actualizar.'
            });
         }
      }
   });
}
function remove(req, res) {
   let id = req.params.id;
   ProductBackLogHistory.findByIdAndRemove(id).exec((err, ok) => {
      if (err) {
         res.status(500).json({
            serverError
         });
      }
      else {
         if (ok) {
            res.status(200).json({
               type: 'success',
               message: 'La historia fue eliminada.'
            });
         }
         else {
            res.status(400).json({
               type: 'warning',
               message: 'No se pudo eliminar la historia.'
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