

function validar(){

	var nombre = $('nombre').val();
	var apellido = $('#apellido').val();
	var mail = $('#mail').val();

	console.log(nombre);

	//Version 1
	/*Un campo vacio formulario invalido*/

	if(nombre.length != 0 && apellido.length !=0 && mail.length !=0 || nombre == ""){
		return true;
	}

	//Version 2

	if(nombre.length == 0 || apellido.length ==0 || mail.length ==0 || nombre == ""){
		return false;
	}

	//Version 1

	var pelis = Array.from($('genero'));

	pelis.forEach(function(elemento,indice)){

		if(elemento.checked){
			console.log("Elegiste esta opcion");
		}
	}

	//Version 2

	var pelis = $('genero');

	$.each(pelis,function(elemento)){

		if(elemento.checked){
			console.log("Elegiste esta opcion");
		}
	}


}

$('#alquilar').on('click', function(e)){
	e.preventDefault();

	var nombre = $('#nombre').val();

	console.log(nombre);

}