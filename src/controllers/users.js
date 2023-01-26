
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY || "secret";








const createUsers = (req, res) => { 

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






const getdeleteUsers=(req, res)=> {
    res.send('Eliminar Usuario')
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
    createUsers,
}