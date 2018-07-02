const service = {}

let pokemones = [
	{"nombre":"Bulbasaur", "tipo":"planta", "evolucion":"inicial", "favorito":false, "imagen":"../../images/001Bulbasaur.png"},
	{"nombre":"Ivysaur", "tipo":"planta", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/002Ivysaur.png"},
	{"nombre":"Venasaur", "tipo":"planta", "evolucion":"final", "favorito":false, "imagen":"../../images/003Venusaur.png"},
	{"nombre":"Charmander", "tipo":"fuego", "evolucion":"inicial", "favorito":false, "imagen":"../../images/004Charmander.png"},
	{"nombre":"Charmeleon", "tipo":"fuego", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/005Charmeleon.png"},
	{"nombre":"Charizard", "tipo":"fuego", "evolucion":"final", "favorito":false, "imagen":"../../images/006Charizard.png"},
	{"nombre":"Squirtle", "tipo":"agua", "evolucion":"inicial", "favorito":false, "imagen":"../../images/007Squirtle.png"},
	{"nombre":"Wartortle", "tipo":"agua", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/008Wartortle.png"},
	{"nombre":"Blastoise", "tipo":"agua", "evolucion":"final", "favorito":false, "imagen":"../../images/009Blastoise.png"},
	{"nombre":"Caterpie", "tipo":"bicho", "evolucion":"inicial", "favorito":false, "imagen":"../../images/010Caterpie.png"},
	{"nombre":"Metapod", "tipo":"bicho", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/011Metapod.png"},
	{"nombre":"Butterfree", "tipo":"bicho", "evolucion":"final", "favorito":false, "imagen":"../../images/012Butterfree.png"},
	{"nombre":"Weedle", "tipo":"bicho", "evolucion":"inicial", "favorito":false, "imagen":"../../images/013Weedle.png"},
	{"nombre":"Kakuna", "tipo":"bicho", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/014Kakuna.png"},
	{"nombre":"Beedrill", "tipo":"bicho", "evolucion":"final", "favorito":false, "imagen":"../../images/015Beedrill.png"},
	{"nombre":"Pidgey", "tipo":"normal", "evolucion":"inicial", "favorito":false, "imagen":"../../images/016Pidgey.png"},
	{"nombre":"Pidgeotto", "tipo":"normal", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/017Pidgeotto.png"},
	{"nombre":"Pidgeot", "tipo":"normal", "evolucion":"final", "favorito":false, "imagen":"../../images/018Pidgeot.png"},
	{"nombre":"NidoranHembra", "tipo":"veneno", "evolucion":"inicial", "favorito":false, "imagen":"../../images/029Nidoran.png"},
	{"nombre":"Nidorina", "tipo":"veneno", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/030Nidorina.png"},
	{"nombre":"Nidoqueen", "tipo":"veneno", "evolucion":"final", "favorito":false, "imagen":"../../images/031Nidoqueen.png"},
	{"nombre":"NidoranMacho", "tipo":"veneno", "evolucion":"inicial", "favorito":false, "imagen":"../../images/032Nidoran.png"},
	{"nombre":"Nidorino", "tipo":"veneno", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/033Nidorino.png"},
	{"nombre":"Nidoking", "tipo":"veneno", "evolucion":"final", "favorito":false, "imagen":"../../images/034Nidoking.png"},
	{"nombre":"Oddish", "tipo":"planta", "evolucion":"inicial", "favorito":false, "imagen":"../../images/043Oddish.png"},
	{"nombre":"Gloom", "tipo":"planta", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/044Gloom.png"},
	{"nombre":"Vileplum", "tipo":"planta", "evolucion":"final", "favorito":false, "imagen":"../../images/045Vileplume.png"},
	{"nombre":"Poliwag", "tipo":"agua", "evolucion":"inicial", "favorito":false, "imagen":"../../images/060Poliwag.png"},
	{"nombre":"Poliwhirl", "tipo":"agua", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/061Poliwhirl.png"},
	{"nombre":"Poliwrath", "tipo":"agua", "evolucion":"final", "favorito":false, "imagen":"../../images/062Poliwrath.png"},
	{"nombre":"Abra", "tipo":"psiquico", "evolucion":"inicial", "favorito":false, "imagen":"../../images/063Abra.png"},
	{"nombre":"Kadabra", "tipo":"psiquico", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/064Kadabra.png"},
	{"nombre":"Alakazam", "tipo":"psiquico", "evolucion":"final", "favorito":false, "imagen":"../../images/065Alakazam.png"},
	{"nombre":"Machop", "tipo":"lucha", "evolucion":"inicial", "favorito":false, "imagen":"../../images/066Machop.png"},
	{"nombre":"Machoke", "tipo":"lucha", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/067Machoke.png"},
	{"nombre":"Machamp", "tipo":"lucha", "evolucion":"final", "favorito":false, "imagen":"../../images/068Machamp.png"},
	{"nombre":"Bellsprout", "tipo":"planta", "evolucion":"inicial", "favorito":false, "imagen":"../../images/069Bellsprout.png"},
	{"nombre":"Weepinbell", "tipo":"planta", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/070Weepinbell.png"},
	{"nombre":"Victreebel", "tipo":"planta", "evolucion":"final", "favorito":false, "imagen":"../../images/071Victreebel.png"},
	{"nombre":"Geodude", "tipo":"roca", "evolucion":"inicial", "favorito":false, "imagen":"../../images/074Geodude.png"},
	{"nombre":"Graveler", "tipo":"roca", "evolucion":"intermedio", "favorito":false, "imagen":"../../images/075Graveler.png"},
	{"nombre":"Golem", "tipo":"roca", "evolucion":"final", "favorito":false, "imagen":"../../images/076Golem.png"},
	{"nombre":"Gastly", "tipo":"fantasma", "evolucion":"inicial", "favorito":true, "imagen":"../../images/092Gastly.png"},
	{"nombre":"Haunter", "tipo":"fantasma", "evolucion":"intermedio", "favorito":true, "imagen":"../../images/093Haunter.png"},
	{"nombre":"Gengar", "tipo":"fantasma", "evolucion":"final", "favorito":true, "imagen":"../../images/094Gengar.png"},
];

var favoritos = ["Gastly","Haunter","Gengar"];

service.pokemones = function(){
	return pokemones
}

service.favoritos = function(){
	return favoritos
}


service.crearFavoritos = function(favorito){
	var repetido = favoritos.indexOf(favorito);
	if(repetido >= 0){
        favoritos.splice(repetido, 1);
 	}else{
       	favoritos.push(favorito);
	}
	for(i=0;i<pokemones.length;i++){
		pokemones[i].favorito=false;
	}
	for(i=0;i<favoritos.length;i++){
		for(j=0;j<pokemones.length;j++){
			if(pokemones[j].nombre===favoritos[i]){
	 			pokemones[j].favorito=true;
 			}
	 	}
	}
}

service.buscar = function(item){
	for(i=0;i<pokemones.length;i++){
		if(item===pokemones[i].nombre){
			var pokemon=pokemones[i];
		}
	}
	return pokemon
}

module.exports = service;