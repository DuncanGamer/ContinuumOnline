const { config } = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');



app.get('/users', (req, res) => {
  res.send('all Users');
});

//Configuracion para que se carguen las variables de entorno
require("dotenv").config();
//Conectamos con la base de datos
require("./database");
const loggedMiddlewere = require("./middlewares/logged");
// Settings servidor virtual
app.set("port", process.env.PORT || 3000);
// 
app.use(morgan('dev'));

app.use (express.urlencoded({extended: false}));
app.use(express.json());


app.set ('view engine', 'ejs');
app.set ('views', path.join(__dirname, 'views'));

app.use (express.static(path.join(__dirname, 'public')))

app.get ('/', (req, res) => {
  res.render('index');
});

//Endpoints
app.use(require('./routes/users'));

//router es un objeto que nos permite crear rutas

// router auth rutas de autenticacion

app.use(require('./routes/concerts'));
//Server asignamos un puerto al servidor usando el metodo listen
//el metodo listen recibe dos parametros el puerto y una funcion de callback
app.listen(app.get("port"), () => {
  console.log(`Todo va bien Brother ${app.get("port")}`);
});