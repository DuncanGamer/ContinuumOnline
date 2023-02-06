const jwt = require("jsonwebtoken");
const express = require('express');
const { Router } = require("express");
const router = Router();
const secretKey = process.env.SECRET_KEY || "secret";
const concerts = require('../models/concerts');
const path = require('path');
const root = path.join(__dirname, '../public');





const createConcerts = (req, res) => {
  const data = req.body
  const newConcert = new concerts({
   concertName: data.concertName,
    artist: data.artist,
    date: data.date,
    place: data.place,
    price: data.price,
    description: data.description,
    image: data.image,
 })
 newConcert.save((err, result) => {
   if (err) {
     console.log ('error al rigistrar usuario')}
     else {
       console.log ('concert created')
       res.redirect('/concerts/all-concerts')
     }
   })
  
 }

 const getcreateConcerts = (req, res) => {
  res.render('create-concerts')
}

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

  const updateConcert = (req, res) => {
    const param = req.params.id
    const data = req.body
    concerts.findOneAndUpdate({_id:param}, data, (error, result) => {
     if (error) {
       console.log('ha ocurrido un error'+error)
       }else{
         console.log('Concierto actualizado')
         res.redirect('/concerts/all-concerts')
       }
     })
 }

 const getupdateConcerts = (req, res) => {
  const param = req.params.id
  concerts.find({_id:param}, (error, result) => {
   if (error) {
     console.log('ha ocurrido un error'+error)
   }else{
     console.log(result)
     res.render('update-concert', { concerts: result })
   }
  
    })
 }
 





module.exports = {
    createConcerts,
    getallconcerts,
    deleteConcerts,
    getdeleteConcerts,
    updateConcert,
    getupdateConcerts,
    getcreateConcerts
};
