'use strict'
const ProductBackLog = require('../models/productBackLog');
const ProductBackLogHistory = require('../models/productBackLogHistory');
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
function search(req, res) {
   let project = req.params.project;
   ProductBackLog.find({ project: project }).exec((err, ok) => {
      if (err) {
         res.status(500).send({
            serverError
         });
      }
      else {
         if (ok) {
            res.status(200).send({
               type: 'success',
               doc: ok
            });
         }
         else {
            res.status(404).send({
               type: 'warning',
               message: 'La historia que busca no existe.'
            });
         }
      }
   });
}
function searchBy(req, res) {
   let id = req.params.id;
   ProductBackLog.findById(id).populate('project').exec((err, ok) => {
      if (err) {
         res.status(500).send({
            serverError
         });
      }
      else {
         if (ok) {
            res.status(200).send({
               type: 'success',
               doc: ok
            });
         }
         else {
            res.status(404).send({
               tyepe: 'warning',
               message: 'La historia que busca no existe.'
            });
         }
      }
   });
}
function update(req, res) {
   let id = req.params.id;
   let dataUpdate = req.body;
   ProductBackLog.findByIdAndUpdate(id, dataUpdate, { new: true, runValidators: true }, (err, ok) => {
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
               message: 'La historia fue actualizada.',
               doc: ok
            });
         }
         else {
            res.status(404).send({
               type: 'warning',
               message: 'La historia no puede ser actualizada.'
            });
         }
      }
   });
}
function remove(req, res) {
   let id = req.params.id;
   ProductBackLogHistory.findOne({ productBackLog: id }).exec((err, ok) => {
      if (err) {
         res.status(500).json({
            serverError
         });
      }
      else {
         if (ok) {
            res.status(400).json({
               type: 'warning',
               message: 'No se puede eliminar la historia con historias.'
            });
         }
         else {
            ProductBackLog.findByIdAndRemove(id, (err, ok) => {
               if (err) {
                  res.status(500).send({
                     serverError
                  });
               }
               else {
                  if (ok) {
                     res.status(200).send({
                        type: 'success',
                        message: 'La historia fue eliminada.'
                     });
                  }
                  else {
                     res.status(404).send({
                        type: 'warning',
                        message: 'No se pudo eliminar la historia.'
                     });
                  }
               }
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