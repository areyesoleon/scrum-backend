'use strict'
const Project = require('../models/project');

function saveProject(req, res) {
   let project = new Project();
   let params = req.body;
   project.name = params.name;
   project.save((err, ok) => {
      if (err) {
         res.status(500).send({
            type: 'error',
            message: 'Error en el servidor'
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
               message:'Ingrese los datos correctamente.'
            });
         }
      }
   });
}