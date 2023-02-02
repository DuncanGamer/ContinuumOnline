const {Router} = require ('express');
const  concerts = require ('../models/concerts');
const router = Router();
const express = require ('express');

const path = require('path');
const root = path.join(__dirname, '../public');
const secretKey = process.env.SECRET_KEY || "secret";
const usersControler = require('../controllers/concerts');



//Endpoints
// Visualizar todos los conciertos 
router.get("/api/concerts",async(req,res)=>{
    const newconcerts = await concerts.find();
    res.json(newconcerts)
});

// Get by id
router.get("/api/concerts/:id", async (req,res)=>{
   const{id} =req.params; 
   const myconcert = await concerts.findById(id);
    res.json(myconcert)

});

// Get by Artist

router.get("/api/concerts/artist/:artist", async (req,res)=>{
  const {artist} = req.params;
  const myconcerts = await concerts.find({artist:artist})
  res.json (myconcerts)  
});

// Get by place

router.get("/api/concerts/place/:place", async (req,res)=>{
    const {place} = req.params;
    const myconcerts = await concerts.find({place:place})
    res.json (myconcerts)  
  });

  // Get by name

router.get("/api/concerts/name/:name", async (req,res)=>{
  const {name} = req.params;
  const myconcerts = await concerts.find({name:name})
  res.json (myconcerts)  
});
  
//Crear concierto

router.post ("/create-concerts", usersControler.createConcerts);

router.get("/all-concerts", usersControler.getallconcerts);

router.get("/delete-concerts/:id", usersControler.getdeleteConcerts);

router.post('/delete-concerts/:id', usersControler.deleteConcerts);

//Actualizar concierto
router.put ("/api/concerts/:id",async(req,res)=>{
   try {
    const {id} = req.params;
    await concerts.findByIdAndUpdate(id, req.body);
    const myconcert = await concerts.find();
    res.json (myconcert);
    myconcert.save();
   } catch (error) {
    res.status(500).json({message:"Error"})
    
   }
  });
  //Eliminar concierto
  router.delete ("/api/concerts/:id",async(req,res)=>{
    try {
     const {id} = req.params;
     await concerts.findByIdAndDelete(id);
     const myconcert = await concerts.find();
     res.json (myconcert);
      myconcert.save();
    } catch (error) {
     res.status(500).json({message:"Error"})
     
    }
  });


module.exports = router;