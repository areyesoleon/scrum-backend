'use strict'
const Project = require('../models/project');
const ProductBackLog = require('../models/productBackLog');

const serverError = {
   type: 'error',
   message: 'Error en la consulta.'
}

function save(req, res) {
   let project = new Project();
   let params = req.body;
   project.name = params.name;
   project.save((err, ok) => {
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
               message: 'Poyecto creado correctamente',
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
   Project.find({}).exec((err, ok) => {
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
               message: 'No hay información de proyectos.'
            });
         }
      }
   });
}

function searchBy(req, res) {
   let id = req.params.id;
   Project.findById(id).exec((err, ok) => {
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
               message: 'El proyecto que busca no existe.'
            });
         }
      }
   });
}

function update(req, res) {
   let id = req.params.id;
   let dataUpdate = req.body;

   Project.findByIdAndUpdate(id, dataUpdate, { new: true, runValidators: true }, (err, ok) => {
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
               message: 'El proyecto fue actualizado',
               doc: ok
            });
         }
         else {
            res.status(404).send({
               type: 'warning',
               message: 'El proyecto no pudo ser actualizado'
            });
         }
      }
   });
}

function remove(req, res) {
   let id = req.params.id;
   ProductBackLog.findOne({ project: id }).exec((err, ok) => {
      if (err) {
         res.status(500).send({
            serverError
         });
      }
      else {
         if (ok) {
            res.status(404).send({
               type: 'warning',
               message: 'No pude eliminar proyectos con historias.'
            });
         }
         else {
            Project.findByIdAndRemove(id, (err, ok) => {
               if (err) {
                  res.status(500).send({
                     serverError
                  });
               }
               else {
                  if (ok) {
                     res.status(200).send({
                        type: 'success',
                        message: 'El proyecto fue eliminado.',
                        doc: ok
                     });
                  }
                  else {
                     res.status(404).send({
                        type: 'warning',
                        message: 'El proyecto no pudo ser eliminado.'
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
