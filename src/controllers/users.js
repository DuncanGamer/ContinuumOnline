
const jwt = require("jsonwebtoken");
const express = require('express');
const { Router } = require("express");
const router = Router();
const secretKey = process.env.SECRET_KEY || "secret";
const users = require('../models/users');
const path = require('path');
const root = path.join(__dirname, '../public');
const { send } = require("process");


//Routes for the login and logup api

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await users.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ user }, secretKey, { expiresIn: "30d" });
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Error al iniciar sesión", error });
  }
};



const Logup = (req, res) => {

  // Obtenemos el nombre, correo y contraseña del cuerpo de la petición
  const { name, email, password } = req.body;
  // Creamos un nuevo documento de usuario utilizando el modelo
  const newUser = new users({ name, email, password });
  // Guardamos el usuario en la base de datos
  newUser.save((error, user) => {
    if (error) {
      res.status(500).json({ message: "Error al crear el usuario", error });
    } else {

      // Si se ha creado el usuario con éxito, generamos un token JWT para autenticar al usuario
      jwt.sign({ user: user }, secretKey, { expiresIn: "30d" }, (err, token) => {
        // Si no hay error al generar el token, devolvemos el token y el usuario creado en la respuesta
        res.json({ token, user });
      });
    }
  });
};

const Users = (verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ message: "Get all users", data });
    }
  });
});
//Routes for the api


const allusers = (req, res) => {
 
}

const createUsers = (req, res) => {
 const data = req.body
 const newUser = new users({
  name: data.name,
  email: data.email,
  password: data.password,
})
newUser.save((err, result) => {
  if (err) {
    console.log ('error al rigistrar usuario')}
    else {
      console.log ('usuario registrado')
      res.redirect('/users/all-users')
    }
  })
 
}

const deleteUsers = (req, res) => {
  const param = req.params.id
  users.deleteOne ({_id:param}, (error, result) => {
    if (error) {
      console.log('ha ocurrido un error'+error)
    }else{
      console.log('usuario eliminado')
      res.redirect('/users/all-users')
    }
  })
 

}

const updateUsers = (req, res) => {
   const param = req.params.id
   const data = req.body
   users.findOneAndUpdate({_id:param}, data, (error, result) => {
    if (error) {
      console.log('ha ocurrido un error'+error)
      }else{
        console.log('usuario actualizado')
        res.redirect('/users/all-users')
      }
    })
}






//Routes for the views


const getdeletetUsers = (req, res) => {
  const param = req.params.id
  users.find({_id:param}, (error, result) => {
    if (error) {
      console.log('ha ocurrido un error'+error)
    }else{
      console.log(result)
      res.render('delete-users', { users: result })
    }
    
      })
}

const getcreateUsers = (req, res) => {
  res.render('create-users')
}

const getallusers = (req, res) => {
  users.find({}, (error, result) => {
    if (error) {
      console.log(error)
    }
    else {
      console.log(result)
      res.render('all-users', { users: result })
    }
  })
  
 } 

 
const getlogin = (req, res) => {
    res.render('login')
  }


  const getupdateUsers = (req, res) => {
   const param = req.params.id
   users.find({_id:param}, (error, result) => {
    if (error) {
      console.log('ha ocurrido un error'+error)
    }else{
      console.log(result)
      res.render('update-users', { users: result })
    }
   
     })
  }




  function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  }

  module.exports = {
    deleteUsers,
    updateUsers,
    createUsers,
    allusers,
    Users,
    Login,
    getupdateUsers,
    getcreateUsers,
    getdeletetUsers,
    getallusers,
    getlogin,
    Logup,
  }   