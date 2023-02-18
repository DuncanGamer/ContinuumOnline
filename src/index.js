const { config } = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const users = require ('./routes/users')
const login = require ('./routes/login')
const loggedMiddleware = require('./middlewares/logged'); 
const concerts = require ('./routes/concerts')
const fileUpload = require('express-fileupload');

//Configuracion para que se carguen las variables de entorno
require("dotenv").config();
//Conectamos con la base de datos
require("./database");
//Configuracion del servidor
app.set("port", process.env.PORT || 3000);
app.set ('view engine', 'ejs');
app.set ('views', path.join(__dirname, 'views'));
app.use(morgan('dev'));//Para que se cargue el morgan morgan es un middleware que nos permite ver las peticiones que se hacen al servidor
// app.use(loggedMiddleware.isLogged);//Para que se cargue el middleware
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : './upload'

}));//Para usar imagenes
app.use (express.urlencoded({extended: false}));//Para que se puedan enviar y recibir datos en formato urlencoded
app.use(express.json());//Para que se puedan enviar y recibir datos en formato json
app.use (express.static(path.join(__dirname, 'public')));//Para que se carguen los archivos estaticos
app.use (login)
app.use('/users',users);
app.use('/concerts',concerts);


app.listen(app.get("port"), () => {
  console.log(`Todo va bien Brother ${app.get("port")}`);
});


app.get ('/', (req, res) => {
  res.render('login');
});

