

const express = require ('express');
const { Router } = require("express");
const router = Router();

const path = require('path');
const root = path.join(__dirname, '../public');
const secretKey = process.env.SECRET_KEY || "secret";
const usersControler = require('../controllers/users');


router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index"));
});
//Routes for the api login and logup

router.post("/login", usersControler.Login);

router.post("/logup", usersControler.Logup);

router.post("/alltheusers", usersControler.Users);


//Routes for the api
router.post("/create-users", usersControler.createUsers); 

router.post("/all-users", usersControler.allusers);
 
router.delete('/delete-users/:id', usersControler.deleteUsers);

router.put('/update-users/:id', usersControler.updateUsers);


//Routes for the views

router.get("/login", usersControler.getlogin);

router.get("/create-users", usersControler.getcreateUsers);

router.get("/all-users", usersControler.getallusers);

router.get("/delete-users/:id", usersControler.getdeletetUsers);

router.get("/update-users/:id", usersControler.updateUsers);





module.exports = router;

