$(document).ready(function(e){

	$.ajax({
		method: "GET",
		url: "http://mariabelenalegre.com/api-encuenta/api.php"})

		.done(function(response){

			response= JSON.parse(response); //SI O SI TIENE QUE SUCEDER PARA QUE TOME LA INFO
			
			console.log(response);

			//console.log("valor que pedi", response[0].enunciado);



			for (var i = 0; i < response[i].enunciado.length; i++) {
				for (var j=0; j< response[i].respuestas.length; j++){
					let infoSegunEri = '<div><h3>' + response[i].enunciado + '</h3><input type="checkbox">' + response[i].respuestas[j] + '</div>';
					// let infoSegunEri = '<div><p>' + response[i].enunciado + " " + '</p><li>' response[i].respuestas + " " + '</li></div>;
					$('#resultados').append(infoSegunEri);
				}
				console.log(infoSegunEri);
				//$('#resultados').append(infoSegunEri);
			}
		});
	
});