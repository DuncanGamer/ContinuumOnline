const { config } = require('dotenv');
//primero importamos el modulo de express
const express = require('express');
const morgan = require('morgan');
//creamos una constante que va a contener la funcion express
const app = express();
const cors = require('cors');
//Importamos el modulo de mysql

 app.get ('/', (req, res) => {
  res.send('Hello World');
});

app.get ('/users', (req, res) => {
  res.send('all Users');
});

//Configuracion para que se carguen las variables de entorno
require("dotenv").config();
//Conectamos con la base de datos
require("./database");
const loggedMiddlewere = require("./middlewares/logged");
// Settings servidor virtual
app.set("port", process.env.PORT||5000);
app.use (morgan('dev'));

//Para que el servidor entienda los datos que le enviamos en formato json
app.use(express.json()); 
app.use(cors());

//Middleware
//app.use(loggedMiddlewere.isLogged);

//Static files middleware para que el servidor pueda acceder a los archivos estaticos
//como imagenes, css, js
app.use(express.static(__dirname + '/public'));


//Endpoints
app.use (require('./routes/users'));

//router es un objeto que nos permite crear rutas

// router auth rutas de autenticacion

app.use(require('./routes/concerts'));
//Server asignamos un puerto al servidor usando el metodo listen
//el metodo listen recibe dos parametros el puerto y una funcion de callback
app.listen(app.get ("port"), () => {
  console.log(`Todo va bien Brother ${app.get("port")}`);
});