var express = require('express');
var router = express.Router();
var createError = require('http-errors')
var controllerPoke = require('../controllers/controllerPoke');

/* GET home page. */
router.post('/favoritos', controllerPoke.obtenerFavorito);
/*Ruta a pokemon individual*/
router.get('/ficha/:id', controllerPoke.cargar);
/*Filtrado de formulario*/
router.post('/filtro', controllerPoke.filtrar);
/*Renderizado de página*/
router.get('/filtro/:page', controllerPoke.paginar);
module.exports = router;
