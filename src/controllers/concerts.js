const jwt = require("jsonwebtoken");
const express = require('express');
const { Router } = require("express");
const router = Router();
const secretKey = process.env.SECRET_KEY || "secret";
const concerts = require('../models/concerts');
const path = require('path');
const root = path.join(__dirname, '../public');
const { uploadImage, deleteImage } = require('../libs/cloudinary');
const fs = require('fs-extra');

const createConcerts = async (req, res) => {
  try {
    const data = req.body;
    let image = {};

    if (req.files && req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      }
      await fs.remove(req.files.image.tempFilePath)
    }

    const userId = req.user._id; // Obtener el ID del usuario autenticado

    const newConcert = new concerts({
      concertName: data.concertName,
      artist: data.artist,
      date: data.date,
      place: data.place,
      price: data.price,
      description: data.description,
      image,
      createdBy: userId // Agrega el ID del usuario autenticado
    });

    const savedConcert = await newConcert.save();
    console.log("Concert created");
    res.status(201).json(savedConcert);
  } catch (err) {
    console.error("Error registering the concert:", err);
    res.status(500).send("Error registering the concert");
  }
};



// const createConcerts = async (req, res) => {
//   try {
//     const data = req.body;
//     let image = {};

//     if (req.files && req.files.image) {
//       const result = await uploadImage(req.files.image.tempFilePath);
//       image = {
//         url: result.secure_url,
//         public_id: result.public_id,
//       }
//       await fs.remove(req.files.image.tempFilePath)
//     }

//     const newConcert = new concerts({
//       concertName: data.concertName,
//       artist: data.artist,
//       date: data.date,
//       place: data.place,
//       price: data.price,
//       description: data.description,
//       image,
//     });

//     const savedConcert = await newConcert.save();
//     console.log("Concert created");
//     res.status(201).json(savedConcert);
//   } catch (err) {
//     console.error("Error registering the concert:", err);
//     res.status(500).send("Error registering the concert");
//   }
// };



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
const getConcertsForApi = (req, res) => {
  concerts.find({}, (error, result) => {
    if (error) {
      console.log(error)
    }
    else {
      console.log(result)
      res.json({ concerts: result })
    }
  })
}
const deleteConcerts = async (req, res) => {
  try {
    const concertRemoved = await concerts.findByIdAndDelete(req.params.id);
    if (!concertRemoved) {
      return res.status(404).send({ message: 'Concert not found.' });
    }
   if (concertRemoved.image.public_id) {
      await deleteImage(concertRemoved.image.public_id);
    } 
    
    res.redirect('/concerts/all-concerts');
   
  } catch (error) {
    console.error(`Error deleting the concert: ${error.message}`);
    res.status(500).send({ message: 'Error deleting the concert, please try again later.' });
  }
};






const getdeleteConcerts = (req, res) => {
  const param = req.params.id
  concerts.find({ _id: param }, (error, result) => {
    if (error) {
      console.log('An error has occurred' + error)
    } else {
      console.log(result)
      res.render('delete-concerts', { concerts: result })
    }

  })
}

const updateConcert = (req, res) => {
  const param = req.params.id
  const data = req.body
  concerts.findOneAndUpdate({ _id: param }, data, (error, result) => {
    if (error) {
      console.log('An error has occurred' + error)
    } else {
      console.log('Concert updated')
      res.redirect('/concerts/all-concerts')
    }
  })
}

const getupdateConcerts = (req, res) => {
  const param = req.params.id
  concerts.find({ _id: param }, (error, result) => {
    if (error) {
      console.log('ha ocurrido un error' + error)
    } else {
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
  getcreateConcerts,
  getConcertsForApi
};
