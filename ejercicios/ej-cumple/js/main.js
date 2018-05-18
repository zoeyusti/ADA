var JsonCumple = {};
var cumples = [];

var datosGuardados = localStorage.getItem("cumples");

console.log(datosGuardados);

$('img').on('click', function(e){
	e.preventDefault();
	var imagen = $(this).data("nombre");
	$("#imagen").val(imagen);
})


$('#guardar').on('click', function(e){
	e.preventDefault();
	var nombre = $('#nombre').val();
	var fecha = $('#fecha').val();
	var imagen = $('#imagen').val();

	//console.log(nombre);

	let alta = {
		nombre: nombre,
		fecha: fecha,
		imagen: imagen,
	};
	console.log(alta);

	cumples.push(alta);

	//JsonCumple.cumples
	console.log(cumples);

	JsonCumple = {
					'cumples': cumples,
					'total': cumples.length
				}

	console.log(JsonCumple);

	let data = JSON.stringify(JsonCumple);

	localStorage.setItem("cumples", data);

})