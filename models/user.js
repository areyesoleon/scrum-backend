'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = Schema({
   name: {
      type: String,
      required: [true, 'Ingrese nombre del usuario.']
   },
   surName: {
      type: String,
      required: [true, 'Ingrese los apellidos del usuario']
   },
   email: {
      type: String,
      validate: {
         validator: function (email) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
         },
         message: '{VALUE} no es un correo valido'
      },
      unique: [true,'El usuario ya esta registrado'],
      required: [true, 'Ingrese correo electronico']
   },
   role: {
      type: Schema.ObjectId,
      ref: 'RoleUser',
      required: [true, 'El usuario no tiene un rol definido']
   },
   password: {
      type: String,
      required: [true, 'Ingrese la contraseña']
   }
});
module.exports = mongoose.model('User', UserSchema);