'use strict'
const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const serverError = {
   type: 'error',
   message: 'Error en la consulta.'
}
function save(req, res) {
   let user = new User();
   let data = req.body;
   user.name = data.name;
   user.surName = data.surName;
   user.email = data.email;
   user.role = data.role;
   if (data.password) {
      bcrypt.hash(data.password, saltRounds, (err, hash) => {
         if (err) {
            res.status(500).json({
               serverError
            });
         }
         else {
            user.password = hash;
            user.save((err, ok) => {
               if (err) {
                  res.status(500).json({
                     type: 'error',
                     arrayError: err
                  });
               }
               else {
                  if (ok) {
                     res.status(200).json({
                        type: 'success',
                        message: 'El usuario fue creado exitosamente.',
                        doc:{
                           name:ok.name,
                           surName:ok.surName,
                           email:ok.email,
                           role:ok.role,
                           password: '>:P desde aca no puedes verla.'
                        } 
                     });
                  }
                  else {
                     res.status(400).json({
                        type: 'warning',
                        message: 'No se pudo crear el usuario.'
                     });
                  }
               }
            });
         }
      });
   }
   else {
      res.status(404).json({
         type: 'warning',
         message: 'La contraseña no fue ingresada.'
      })
   }
}
function search(req,res){
   User.find({},(err,ok)=>{
      if(err){

      }
      else{
         if(ok){

         }
         else{
            
         }
      }
   });
}
module.exports = {
   save
}