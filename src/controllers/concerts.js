const jwt = require("jsonwebtoken");
const express = require('express');
const { Router } = require("express");
const router = Router();
const secretKey = process.env.SECRET_KEY || "secret";
const concerts = require('../models/concerts');
const path = require('path');
const root = path.join(__dirname, '../public');

const createConcerts = (req, res) => {
    const { concertName, artist, date, place, price, description, image } = req.body;
    const newConcert = new concerts({
      concertName,
        artist,
        date,
        place,
        price,
        description,
        image,
    });
    newConcert.save((err, result) => {
        if (err) {
            console.error('Error al guardar el concierto en la base de datos:', err);
            res.status(500).send({ message: 'Error al guardar el concierto en la base de datos' });
        } else {
            console.log('Concierto guardado correctamente');
            res.status(200).send({ message: 'Concierto guardado correctamente' });
        }
    });
};


const getallconcerts = (req, res) => {
    concerts.find({}, (error, result) => {
      if (error) {
        console.log(error)
      }
      else {
        console.log(result)
        res.render('all-concerts', { concerts: result })
      }
    })
    
   } 
   
   const deleteConcerts = (req, res) => {
    const param = req.params.id
    concerts.deleteOne ({_id:param}, (error, result) => {
      if (error) {
        console.log('ha ocurrido un error'+error)
      }else{
        console.log('usuario eliminado')
        res.redirect('/concerts/all-concerts')
      }
    })
   
  
  }


const getdeleteConcerts = (req, res) => {
    const param = req.params.id
    concerts.find({_id:param}, (error, result) => {
      if (error) {
        console.log('ha ocurrido un error'+error)
      }else{
        console.log(result)
        res.render('delete-concerts', { concerts: result })
      }
      
        })
  }





module.exports = {
    createConcerts,
    getallconcerts,
    deleteConcerts,
    getdeleteConcerts
};
