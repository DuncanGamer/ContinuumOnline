


const { Router } = require("express");

const router = Router();

const jwt = require("jsonwebtoken");
const path = require('path');
const root = path.join(__dirname, '../public');
const secretKey = process.env.SECRET_KEY || "secret";
const users  = require ('../models/users'); 

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index"));
});

router.post("/api/login", (req, res) => {
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
});



router.post("/api/create-users", (req, res) => {
 
  // Obtenemos los datos del nuevo usuario a partir del cuerpo de la solicitud HTTP
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
});

router.post("/api/users", verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ message: "Get all users", data });
    }
  });
});


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

module.exports = router;

