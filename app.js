'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

{/*Carga de rutas*/ }
let projectRoutes = require('./routes/project');
let productBackLogRoutes = require('./routes/productBackLog');
let productBackLogHistoyRoutes = require('./routes/productBackLogHistory');
let sprintRoutes = require('./routes/sprint');
let originTaskRoutes = require('./routes/originTask');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
   res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
   res.header('Allow', 'GET,POST,OPTIONS,PUT,DELETE');
   next();
});

{/*Rutas base*/ }
app.use('/api/project', projectRoutes);
app.use('/api/productBackLog', productBackLogRoutes);
app.use('/api/productBackLogHistory', productBackLogHistoyRoutes);
app.use('/api/sprint', sprintRoutes);
app.use('/api/originTask', originTaskRoutes);

module.exports = app;