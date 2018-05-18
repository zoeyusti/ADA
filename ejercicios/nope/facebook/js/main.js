var arrayNombres = ["Pepa", "Holandesa", "Me gustan los muffins"];

var oveja=["Lala", "oveja.png"];
var conejo= ["Pepito", "pepito.png", "Zanahorias"];

var amigosDiv = document.getElementById('amigos');

var amigos= [oveja, conejo];
console.log("Nombre del conejo: " +amigos[1][0]);

var i,j;

for(i=0;i<amigos.length;i++){

	// console.log(amigos[i]);
	for(j=0;j<amigos[i].length;j++){
		console.log(amigos[i][j]+",");
	}
}



function cargarDatosPersonales(arrayNombres){

	var nombre = document.createElement('h1');
	nombre.textContent = arrayNombres[0];

	var nacionalidad = document.createElement('h2');
	nacionalidad.textContent = arrayNombres[1];

	var resumen = document.createElement('p');
	resumen.textContent = arrayNombres[2];

	var dpDiv = document.getElementById('datosPerfil');
	dpDiv.appendChild(nombre);
	dpDiv.appendChild(nacionalidad);
	dpDiv.appendChild(resumen);
}

/*muestra en el HTML una lista de cargarListaImagenes
	@params lista | array, padre | nodo HTML
	void
*/



function cargarListaImagenes(lista,padre){
	var img = document.createElement('img');
	for(i=0;i<lista.length;i++){
		img.src = lista[i][1];
	}
	padre.appendChild(img);

}

var muro = document.getElementById('muro');

function cargarMuro(m){
	var ul = document.createElement('ul');

	for(var i=0; i<3; i++){

		var li = document.createElement('li');

		var img = document.createElement('img');
		img.src = "imgs/conejo.png";
		img.classList.add('thumb');
	}
}


/*function cargarComentarios(lista){
	var img = document.createElement('img');
	var comment= document.createElement('p')
	for(i=0;i<lista.length;i++){
		img.src = lista[i][1];
		comment.textContent= lista[i][2];
	}

}*/

cargarDatosPersonales(arrayNombres);
cargarListaImagenes(amigos,amigosDiv);
