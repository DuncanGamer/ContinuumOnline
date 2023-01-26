

const express = require ('express');
const { Router } = require("express");
const router = Router();

const path = require('path');
const root = path.join(__dirname, '../public');
const secretKey = process.env.SECRET_KEY || "secret";
const usersControler = require('../controllers/users');


router.get("/", (req, res) => {

});

router.post("/login", usersControler.getLogin);

router.post("/create-users", usersControler.getcreateUsers); 
 
router.post("/all-users", usersControler.getAllUsers);

router.get('/delete-users', usersControler.getdeleteUsers);




module.exports = router;

