
const jwt = require("jsonwebtoken");
const express = require ('express');
const { Router } = require("express");
const router = Router();
const secretKey = process.env.SECRET_KEY || "secret";
const users  = require ('../models/users'); 
const path = require('path');
const root = path.join(__dirname, '../public');


const getLogin = (req, res) => {  
  
  
    // Obtenemos el correo y la contraseña del cuerpo de la petición
    const { email, password } = req.body;

    // Buscamos el usuario en la base de datos utilizando su correo electrónico
    users.findOne({ email }, (error, user) => {
      if (error) {
        res.status(500).json({ message: "Error al iniciar sesión", error });
      } else if (!user) {
        // Si no se encuentra ningún usuario con ese correo electrónico, devolvemos un error
        res.status(404).json({ message: "Usuario no encontrado" });
      } else if (user.password !== password) {
        // Si se encuentra el usuario, pero la contraseña es incorrecta, devolvemos un error
        res.status(401).json({ message: "Contraseña incorrecta" });
      } else {
        // Si se encuentra el usuario y la contraseña es correcta, generamos un token JWT
        jwt.sign({ user: user }, secretKey, { expiresIn: "30d" }, (err, token) => {
          // Si no hay error al generar el token, devolvemos el token y el usuario en la respuesta
          res.json({ token });
         
        });
      }
    });
  
  };
const getcreateUsers = (req, res) => { 
  res.render('login');

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

const getAllUsers = (verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (err, data) => {
        if (err) {
          res.sendStatus(403);
        } else {
          res.json({ message: "Get all users", data });
        }
      });
    });


const getdeleteUsers=(req, res)=> {
    res.render('delete-users')
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
    getdeleteUsers,
    getcreateUsers,
    getAllUsers,
    getLogin
}