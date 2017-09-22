'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = Schema({
   name: {
      type: String,
      require: [true, 'Ingrese nombre del usuario.']
   },
   surName: {
      type: String,
      require: [true, 'Ingrese los apellidos del usuario']
   },
   email: {
      type: String,
      validate: {
         validator: function (email) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
         },
         message: '{VALUE} no es un correo valido'
      },
      require: [true, 'Ingrese correo electronico']
   },
   role: {
      type: Schema.ObjectId,
      ref: 'RoleUser',
      require: [true, 'El usuario no tiene un rol definido']
   }
});
module.exports = mongoose.model('User', UserSchema);