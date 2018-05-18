

var cumples= JSON.parse(cumpleStorage).cumples;


//Recupero los cumples guardados


function proximosCumples() {

	$.each(cumples,function(index, elem){

		let li = `<li><p><span>${elem.fechaNac}</span>
				${elem.nombre}</p></li>`;
		$('#cumples').append(li);

	});
}

function cumpleDelDia(){

	let cumpleHoyImg = cumples[0].imagen;
	let cumpleHoyName = cumples[0].nombre;

	let h1 = `<h1>${cumpleHoyName}</h1>;
	let img = `<img src="img/${cumpleHoyImg}.png">`;

	$('#cumple-dia').append(h1);
	$('#cumple-dia').append(img);
}