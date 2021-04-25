const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const user = require('./routes/user');

app.use(bodyParser.json());//Permite manejar peticiones y mandar respuestas en formato JSON

app.use(bodyParser.urlencoded({extended: false}));  // Nos dice que no vamos a recibir peticiones envidas directamente de un formulario

app.use('/user', user);



module.exports = app;