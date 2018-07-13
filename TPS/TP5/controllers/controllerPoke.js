const service = require('../services/pokeService')
const self = {};

/*Cargamos al pokemon solito*/
self.cargar = function(req,res,next){
	let mipokemon = req.params.id;
	var pokemon = service.buscar(mipokemon)
	if(pokemon){
		res.render('individual', {pokemon:pokemon});
	}
	else{
		res.render('error', {mensajeError:"Pokemon no identificado"});
	}
}



self.obtenerFavorito = function(req,res,next){
	var favorito = (JSON.parse(req.body.info)).favorito;
	service.crearFavoritos(favorito);
	res.send("funciona?")
}


self.filtrar = function(req,res,next){
	var tipo = req.body.tipo.toLowerCase();
	var evolucion = req.body.evolucion.toLowerCase();
	filtroPokemon = service.pokemones();
	if(tipo!="todos"){
		filtroPokemon = filtroPokemon.filter(function(item){return item.tipo===tipo})
	}
	if(evolucion!="todos"){
		filtroPokemon = filtroPokemon.filter(function(item){return item.evolucion===evolucion})
	}
	if(filtroPokemon.length===0){
		res.render("error", {mensajeError:"Solo hay pasto"})
	}else{
	res.redirect('/poke/filtro/1')
};	
}

/*Paginado que mata, gracias google*/
self.paginar = function(req,res,next){ 
	var cantPaginas = filtroPokemon.length/3;
	if(!Number.isInteger(cantPaginas)){
		paginas = Math.floor(cantPaginas + 1)
	}else{
		paginas = cantPaginas
	}

    var arrayPaginas = Array(paginas).fill().map((e,i)=>i+1);
	var numeroParams = req.params.page 
	if(!isNaN(numeroParams) && numeroParams<=paginas && numeroParams>0){
		var numero= numeroParams - 1;
		console.log(numero)
		}else{
			res.render('error', {mensajeError:"Estás buscando pokemones no registrados en la pokedex"}) 
		}
	
	var principioIntervalo = numero*3;
	var finIntervalo = principioIntervalo + 3;
	var pokemonesPagina = filtroPokemon.slice(principioIntervalo,finIntervalo) 
	
	res.render('index', {pokemones:pokemonesPagina, paginas:arrayPaginas})
}

module.exports = self;