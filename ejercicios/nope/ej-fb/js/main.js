var h1 = document.getElementById('nombre');
var nombre = h1.textContent; //<- "Pepa";
var h2 = document.getElementById("edad");
var edad = h2.textContent; //<-"28"

function validarEdad(x) {
	var edad = parseInt (x); // <- Convierte string en int

	if (!isNaN(x)) {
		if (x>=18) {
			return true;
		}	
	}
	else { return false;}

}