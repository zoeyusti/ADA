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
	res.send("funciona, wiiii");

}


self.filtrar = function(req,res,next){
	var tipo = req.body.tipo.toLowerCase();
	var evolucion = req.body.evolucion.toLowerCase();
	var favorito = req.body.favorito.toLowerCase();
	filtroPokemon = service.pokemones();
	if(tipo!="todos"){
		filtroPokemon = filtroPokemon.filter(function(cosito){return cosito.tipo===tipo})
	}
	if(evolucion!="todos"){
		filtroPokemon = filtroPokemon.filter(function(cosito){return cosito.evolucion===evolucion})
	}
	if (favorito!="todos") {
		filtroPokemon = filtroPokemon.filter(function(cosito){return cosito.favorito})
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
	var numeroPaginaActual = req.params.page 
	console.log(numeroPaginaActual);
	if(!isNaN(numeroPaginaActual) && numeroPaginaActual>0 && numeroPaginaActual<=paginas){
		var numero = numeroPaginaActual - 1;
		//console.log(numero);
	}else{
			res.render('error', {mensajeError:"Estás buscando pokemones no registrados en la pokedex"}) 
	}
	if (paginas>10) {
		if (numeroPaginaActual>=1 && numeroPaginaActual<6) {
			var fin = +numero + 5; //se agrega el + porque es un string, no un numero pese al nombre
			var principio = 0;
		}
		else if (numeroPaginaActual==paginas) {
			var fin = paginas;
			var principio = fin -6;
		} else{
			var principio = +numero - 4; 
			var fin = +numero +5;
		}
		//console.log(principio);
		//console.log(fin);
		var arrayPaginado = arrayPaginas.slice(principio,fin);
		console.log(arrayPaginado);

	}

	//acordate que numero empieza desde 0, hace bien las cuentas
	var dePrincipio = numero*3;
	//console.log(dePrincipio);
	var aFin = dePrincipio + 3;
	//console.log(aFin);
	var pokemonesPagina = filtroPokemon.slice(dePrincipio,aFin)
	//console.log(pokemonesPagina);
	//console.log(arrayPaginas);
	
	res.render('index', {pokemones:pokemonesPagina, paginas:arrayPaginado})
}

module.exports = self;