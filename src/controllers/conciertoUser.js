const Concert = require('../models/concerts');

// Obtener todos los conciertos


const obtenerConciertos = async (req, res) => {
  try {
    const param = req.params.createdBy;
    const conciertos = await Concert.find({ createdBy: param });
    res.json(conciertos);
   
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener los conciertos');
  }
};

module.exports = {
    obtenerConciertos,
};





