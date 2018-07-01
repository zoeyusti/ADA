const service = require('../services/pokeService')
const self = {}

self.renderHome = function(req,res,next){
	filtroPokemon = service.pokemones()
	res.render('home', {favoritos:service.favoritos()})
}

module.exports = self;