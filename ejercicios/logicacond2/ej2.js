var distancia=10;
var costo=2000;
var presupuesto=1500;
var almuerzo=0;
var turno="doble";



if (distancia<10) {
	presupuesto=presupuesto+1500*0.2;
	if (almuerzo<costo*0.15) {
		console.log("Ana evalúa incluir el almuerzo");
	}
	else{
		console.log("Tomás se quedará con hambre");
	}
}
else{
	if (costo<=presupuesto) {
		console.log("Ana le da para adelante");
	}
	else{
		if (turno=="doble" && almuerzo+costo<=2800) {
			console.log("Tomás se irá un largo tiempo a la colonia");
		}
		else{
			console.log("Tomás se quedará en casa");
		}

	}
}