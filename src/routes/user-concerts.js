const express = require('express');
const router = express.Router();
const conciertoUser = require('../controllers/conciertoUser');

// Ruta para obtener todos los conciertos
router.get('/conciertos/:createdBy', conciertoUser.obtenerConciertos);

// Ruta para crear un nuevo concierto


// Ruta para obtener un concierto por ID


module.exports = router;
