'use sctrict'
const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3789;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/scrum',{useMongoClient:true})
.then(() => {
   console.log('Conectado a db scrum');
   app.listen(port,() => {
      console.log('Servidor corriendo');
   })
})
