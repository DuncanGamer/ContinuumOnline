const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User =require('../models/users');

const getAdmin = (req, res) => {};



const login_api = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        res.send("error al buscar usuario" + err);
        return;
      }
      if (user) {
        console.log("usuario encontrado");
        res.redirect("/users/all-users");
      } else {
        res.send("usuario no encontrado");
      }
    });
  };
  
  

const register = (req, res) => {
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 8)
    })
    user.save((err, user) => {
        if (err){
            res.send ('error al registrar usuario')
        }else{
            res.send ('usuario registrado')
        }
    })

};

module.exports = {
    getAdmin,
    login_api,
    register
};
