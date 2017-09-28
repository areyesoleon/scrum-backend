'use strict'
const OriginTask = require('../models/originTask');
const serverError = {
   type: 'error',
   message: 'Error en la consulta.'
}
function save(req, res) {
   let originTask = new OriginTask();
   let data = req.body;
   originTask.description = data.description;
   originTask.save((err, ok) => {
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
               message: 'El origen fue creado correctamente.',
               doc: ok
            });
         }
         else {
            res.status(400).json({
               type: 'warning',
               message: 'No se pudo crear el origen.'
            });
         }
      }
   });
}
function search(req, res) {
   OriginTask.find({}).exec((err, ok) => {
      if (err) {
         res.status(500).json({
            type: 'error',
            serverError
         });
      }
      else {
         if (ok) {
            res.status(200).json({
               type: 'success',
               message: 'Los origenes de tareas fueron encotrados.',
               doc: ok
            });
         }
         else {
            res.status(404).json({
               type: 'warning',
               message: 'El origen de la tarea que busca no existe.'
            });
         }
      }
   });
}
function searchBy(req, res) {
   let id = req.params.id;
   OriginTask.findById(id).exec((err, ok) => {
      if (err) {
         res.status(500).json({
            type: 'error',
            serverError
         });
      }
      else {
         if (ok) {
            res.status(200).json({
               type: 'success',
               message: 'El origen de la tarea fue encotrado.',
               doc: ok
            });
         }
         else {
            res.status(404).json({
               type: 'warning',
               message: 'El origen de la tarea que busca no existe.'
            });
         }
      }
   });
}
module.exports = {
   save,
   search,
   searchBy
}